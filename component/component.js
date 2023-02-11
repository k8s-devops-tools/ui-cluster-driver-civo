/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

const languages = {
  'en-us': {
    'clusterNew': {
      'civo': {
        'apiKey': {
          'next': 'Proceed to Cluster Configuration',
          'loading': 'Verifying your API key',
          'title': 'Civo API Key',
          "required": "API key is required",
          "placeholder": "The API key to use for accessing your Civo account",
          'description': 'Provide us with the API key that will be used to access your Civo account'
        },
        "clusterConfig": {
          'next': 'Proceed to Cluster Configuration',
          'loading': 'Verifying your access token'
        },
        "name": {
          "label": "Name",
          "placeholder": "The name of Civo cluster"
        },
        "region": {
          "label": "Region",
          "required": "Region is required"
        },
        "kubernetesVersion": {
          "label": "Kubernetes Version",
          "placeholder": "Select a kubernetes version for your cluster",
          "required": "Kubernetes Version is required"
        },
        "networkId": {
          "label": "Network ID",
          "placeholder": "Select a network ID for your cluster"
        },
        "cniPlugin": {
          "label": "CNI Plugin",
          "placeholder": "Select a CNI plugin for your cluster"
        },
        "firewallId": {
          "label": "firewall ID",
          "placeholder": "Select a firewall ID for your cluster"
        },
        "nodePoolConfig": {
          'next': 'Create',
          'loading': 'Creating your cluster',
          'title': 'Node Pool Configuration',
          'description': 'Configure your desired node pools',
          'update': "Update"
        },
        "selectedNodePoolType": {
          "label": "Select type",
          "placeholder": "Select a node pool type"
        },
        "nodePools": {
          "label": "Selected Node Pools",
          "required": "Please add at least one node pool",
          "empty": "Sorry, node pool list is empty",
          "countError": "All node counts must be greater than 0.",
          "placeholder": "Please select a node type to add"
        }
      }
    }
  }
};

const regionMap = {
  'New York 1':  'NYC1',
  'Frankfurt 1': 'FRA1',
  'London 1':    'LON1',
  'Phoenix 1':   'PHX1',

}

const k8sVersions = [];

// for tags
const newTag = "";

// for node pools
const selectedNodePoolType = "";
const selectedNodePoolObj = {};
const selectedNodePoolList = [];

/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed     = Ember.computed;
const observer     = Ember.observer;
const get          = Ember.get;
const set          = Ember.set;
const alias        = Ember.computed.alias;
const service      = Ember.inject.service;
const hash         = Ember.RSVP.hash;
const next         = Ember.run.next;

const defaultRadix = 10;
const defaultBase  = 1024;
/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/



/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(ClusterDriver, {
  driverName: '%%DRIVERNAME%%',
  configField: '%%DRIVERNAME%%EngineConfig',
  app:        service(),
  router:      service(),
  session: service(),
  intl: service(),
  linode: service(),

  step: 1,
  lanChanged: null,
  refresh: false,

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template      = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template'
    });
    set(this,'layout', template);

    this._super(...arguments);

    // for languages
    const lang = get(this, 'session.language');
    get(this, 'intl.locale');
    this.loadLanguage(lang);

    let config      = get(this, 'config');
    let configField = get(this, 'configField');

    // for node pools
    set(this, "selectedNodePoolType", "")
    set(this, "selectedNodePoolObj", {});
    set(this, "selectedNodePoolList", this.prefillSelectedNodePoolList());

    if ( !config ) {
      config = this.get('globalStore').createRecord({
        type:               configField,
        name: "",
        label: "",
        description: "",
        apiKey: "",
        networkId: "",
        cniPlugin: "",
        firewallId: "",
        region: "FRA1",
        kubernetesVersion: "1.18",
        nodePools: []
      });

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', config);
    }
  },
  /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

  config: alias('cluster.%%DRIVERNAME%%EngineConfig'),

  actions: {
    verifyApiKey(cb) {
      const auth = {
        token: get(this, "cluster.%%DRIVERNAME%%EngineConfig.apiKey"),
      };
      let errors = [];
      const intl = get(this, "intl");

      if (!auth.token) {
        errors.push(intl.t("clusterNew.civo.apiKey.required"));
        set(this, "errors", errors);
        cb(false);
      } else {

      }
    },
    verifyClusterConfig(cb) {
      // verify if tags are not null
      // if null replace with empty array
      const tags = get(this, "cluster.%%DRIVERNAME%%EngineConfig.tags");
      if (!tags) {
        set(this, "cluster.%%DRIVERNAME%%EngineConfig.tags", []);
      }
      set(this, "step", 3);
      cb(true);
    },

    createCluster(cb) {
      if (this.verifyNodePoolConfig()) {
        this.send("driverSave", cb);
      } else {
        cb(false);
      }
    },

    updateCluster(cb) {
      if (this.verifyNodePoolConfig()) {
        this.send("driverSave", cb);
      } else {
        cb(false);
      }
    },

    cancelFunc(cb){
      // probably should not remove this as its what every other driver uses to get back
      get(this, 'router').transitionTo('global-admin.clusters.index');
      cb(true);
    },

    // for tags
    addNewTag() {
      const tags = get(this, "cluster.%%DRIVERNAME%%EngineConfig.tags") || [];
      const newTag = get(this, "newTag");

      if (newTag) {
        tags.pushObject(newTag);
        set(this, "cluster.%%DRIVERNAME%%EngineConfig.tags", tags);
        set(this, "newTag", "");
      }
    },
    deleteTag(idx) {
      const tags = get(this, "cluster.%%DRIVERNAME%%EngineConfig.tags") || [];
      set(this, "cluster.%%DRIVERNAME%%EngineConfig.tags", tags.filter((tag, index) => index !== idx));
    },

    // for node pools
    addSelectedNodePool() {
      const selectedNodePoolObj = get(this, "selectedNodePoolObj");
      const selectedNodePoolList = get(this, "selectedNodePoolList");

      if (selectedNodePoolObj.id) {
        // add to list
        selectedNodePoolList.pushObject(selectedNodePoolObj);

        // clear selected
        set(this, "selectedNodePoolType", "");
        set(this, "selectedNodePoolObj", {});
      }
    },
    deleteNodePool(id) {
      const selectedNodePoolList = get(this, "selectedNodePoolList");

      set(this, "selectedNodePoolList", selectedNodePoolList.filter(n => n.id !== id))
    }
  },

  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = get(this, 'errors')||[];
    if ( !get(this, 'cluster.name') ) {
      errors.push('Name is required');
    }

    // Add more specific errors

    // Check something and add an error entry if it fails:
    // if ( parseInt(get(this, 'config.memorySize'), defaultRadix) < defaultBase ) {
    //   errors.push('Memory Size must be at least 1024 MB');
    // }

    // Set the array of errors for display,
    // and return true if saving should continue.
    if ( get(errors, 'length') ) {
      set(this, 'errors', errors);
      return false;
    } else {
      set(this, 'errors', null);
      return true;
    }
  },


  // Any computed properties or custom logic can go here

  // For languages
  languageChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');

    if (lang) {
      this.loadLanguage(lang[0]);
    }
  }),

  loadLanguage(lang) {
    const translation = languages[lang] || languages['en-us'];
    const intl = get(this, 'intl');

    intl.addTranslations(lang, translation);
    intl.translationsFor(lang);
    set(this, 'refresh', false);
    next(() => {
      set(this, 'refresh', true);
      set(this, 'lanChanged', +new Date());
    });
  },

  // For API Key step
  apiKeyTitle: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.apiKey.title");
  }),
  apiKeyDetail: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.apiKey.description");
  }),

  // For Cluster Configuration Step
  clusterConfigTitle: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.clusterConfig.title");
  }),
  clusterConfigDetail: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.clusterConfig.description");
  }),

  regionChoices: Object.entries(regionMap).map((e) => ({
    label: e[0],
    value: e[1]
  })),
  selectedRegion: computed('cluster.%%DRIVERNAME%%EngineConfig.region', function() {
    const region = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region');

    return region;
  }),

  // for region choises
  regionChoises: computed('regions', async function() {
    const ans = await get(this, "regions");
    return ans.map(e => {
      return {
        label: e.id,
        value: e.id
      }
    });
  }),

  // for kubernetes version
  k8sVersionChoises: computed("k8sVersions.[]", function() {
    const k8sVersions = get(this, "k8sVersions");
    return k8sVersions.map(v => {
      return {
        label: v.id,
        value: v.id
      }
    })
  }),

  // For Node Pool Configuration Step
  nodePoolConfigTitle: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.title");
  }),
  nodePoolConfigDetail: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.description");
  }),

  // for node pool choises
  nodePoolChoises: computed("nodeTypes.[]", "selectedNodePoolList.[]", async function() {
    const intl = get(this, 'intl');
    const ans = await get(this, "nodeTypes");
    const filteredAns = ans.filter(np => {
      // filter out the already selected node pools
      const selectedNodePoolList = get(this, "selectedNodePoolList");
      const fnd = selectedNodePoolList.find(snp => snp.id === np.id);
      if (fnd) return false;
      else return true;
    }).map(np => {
      return {
        label: np.label,
        value: np.id
      }
    });
    return [{label: intl.t("clusterNew.civo.nodePools.placeholder"), value: ""}, ...filteredAns];
  }),
  setSelectedNodePoolObj: observer("selectedNodePoolType", async function() {
    const nodePoolTypes = await get(this, "nodeTypes");
    const selectedNodePoolType = get(this, "selectedNodePoolType");

    if (selectedNodePoolType) {
      const ans = nodePoolTypes.find(np => np.id === selectedNodePoolType);
      set(this, "selectedNodePoolObj", {...ans, count: 1, memoryGb: ans.memory / 1024, diskGb: ans.disk / 1024});
    } else set(this, "selectedNodePoolObj", {});
  }),
  setNodePools: observer("selectedNodePoolList.@each.count", function() {
    const selectedNodePoolList = get(this, "selectedNodePoolList");
    const nodePools = selectedNodePoolList.map(np => {
      return `${np.id}=${np.count}`
    })
    set(this, "cluster.%%DRIVERNAME%%EngineConfig.nodePools", nodePools);
  }),

  verifyNodePoolConfig() {
    const intl = get(this, 'intl');
    const selectedNodePoolList = get(this, "selectedNodePoolList");
    const errors = [];

    if (selectedNodePoolList.length === 0) {
      errors.push(intl.t("clusterNew.civo.nodePools.required"));
      set(this, "errors", errors);
      return false;
    } else {
      const fnd = selectedNodePoolList.find(np => np.count <= 0);
      if (fnd) {
        errors.push(intl.t("clusterNew.civo.nodePools.countError"));
        set(this, "errors", errors);
        return false;
      }
      return true;
    }
  },

  // to prefil selected node pool list for edit mode
  prefillSelectedNodePoolListObserver: observer("nodeTypes.[]", function() {
    this.prefillSelectedNodePoolList();
  }),

  async prefillSelectedNodePoolList() {
    const nodePools = get(this, "cluster.%%DRIVERNAME%%EngineConfig.nodePools");
    const nodePoolTypes = await get(this, "nodeTypes");

    if (nodePools && nodePools.length) {
      set(this, "selectedNodePoolList", nodePools.map(np => {
        const [npId, cnt] = np.split("=");
        const fnd = nodePoolTypes.find(npt => npt.id === npId);
        if (fnd) {
          return {...fnd, count: cnt};
        } else return {id: npId, count: cnt, label: npId};
      }));
    } else {
      set(this, "selectedNodePoolList", []);
    }
  },

  // Any computed properties or custom logic can go here
});
