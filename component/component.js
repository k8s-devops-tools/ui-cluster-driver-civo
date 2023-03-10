/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
// https://github.com/rancher/ui/blob/master/lib/shared/addon/mixins/cluster-driver.js
import ClusterDriver from 'shared/mixins/cluster-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed = Ember.computed;
const equal = Ember.computed.equal;
const observer = Ember.observer;
const get = Ember.get;
const set = Ember.set;
const setProperties = Ember.setProperties;
const alias = Ember.computed.alias;
const service = Ember.inject.service;
const all = Ember.RSVP.all;
const hash         = Ember.RSVP.hash;
const next = Ember.run.next;


/* !!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/

const regionMap = {
  'New York 1':  'NYC1',
  'Frankfurt 1': 'FRA1',
  'London 1':    'LON1',
  'Phoenix 1':   'PHX1',
}

const k8sVersionMap = {
  '1.23.6-k3s1': '1.23.6-k3s1',
  '1.24.4-k3s1': '1.24.4-k3s1',
  '1.25.0-k3s1': '1.25.0-k3s1', // default
}

const vcnIdMap = { quick: 'Quick Create', }

const subnetAccessMap = { public: 'Public', private: 'Private', }

const nodeShapeMap = {
  'g4s.kube.xsmall':          'g4s.kube.xsmall',
  'g4s.kube.small':          'g4s.kube.small',
}

const languages = {
  'en-us': {
    'clusterNew': {
      'civo': {
        'access': {
          'next':    'Next: Authenticate & Configure Cluster',
          'loading': 'Loading values from Civo',
          'title':   'Civo Account Configuration',
          'detail':  'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
        },
        'region':      { 'label': 'Region' },
        'apiKey': {
          'next': 'Proceed to Cluster Configuration',
          'label':       'API key is required',
          'placeholder': 'The API key to use for accessing your Civo account',
          'required':    'API key is required'
        },
        'cluster': {
          'title':   'Cluster Configuration',
          'detail':  'Choose the Kubernetes version and the number of nodes per subnet for the cluster.',
          'next':    'Next: Configure Virtual Cloud Network',
          'loading': 'Loading VCNs from Oracle Cloud Infrastructure'
        },
        'vcn': {
          'title':    'Virtual Cloud Network',
          'detail':   'Configure the virtual cloud network that will be used for your Kubernetes cluster.',
          'label':    'Virtual Cloud Network',
          'required': 'VCN is required'
        },
        'version': {
          'label':    'Kubernetes Version',
          'required': 'Kubernetes Version is required'
        },
        'cidr': {
          'label':       'Virtual Cloud Network CIDR',
          'placeholder': 'e.g. 172.16.0.0/16',
          'required':    'Virtual Cloud Network CIDR is required',
          'error':       'Virtual Cloud CIDR format error',
        },
        'existingVCNDetails': {
          'compartmentOCID':            'OCID of the VCN\'s compartment',
          'compartmentOCIDPlaceholder': 'e.g. ocid1.compartment.oc1..aaaaaaaa...',
          'compartmentOCIDHelp':        'leave blank if it\'s the cluster compartment',
          'vcnName':                    'Name of the pre-existing VCN',
          'vcnNamePlaceholder':         'e.g. my-vcn',
          'lbSubnetName1':              'Name of first pre-existing LB subnet',
          'lbSubnetName1Placeholder':   'e.g. my-lb-sub-1',
          'lbSubnetName2':              'Name of second pre-existing LB subnet (if applicable)',
          'lbSubnetName2Placeholder':   'e.g. my-lb-sub-2',
        },
        'quantityPerSubnet': {
          'label':       'Nodes Per Subnet Count',
          'placeholder': 'e.g. 1',
          'required':    'Nodes per subnet is required',
          'help':        'The quantity of nodes nodes to run in each worker subnet',
          'error':       'The count of nodes should not be greater than {max}'
        },
        'nodeShape': {
          'label':    'Instance Shape',
          'required': 'Instance Shape is required'
        },
        'nodeSSHKey': {
          'label':       'SSH public key for nodes',
          'placeholder': 'Optional SSH public key for the nodes',
        },
        'instanceConfig': {
          'label':    'Instance Configuration(CPU/Memory)',
          'gpuLabel': 'Instance Configuration(CPU/Memory/GPU Type/GPU Count)',
          'required': 'Instance Configuration is required'
        },
        'subnet': {
          'label':    'Subnet Access',
          'required': 'Subnet access is required'
        },
        'node': {
          'title':   'Node Type',
          'detail':  'Choose the node type that will be used for this Kubernetes cluster',
          'next':    'Next: Configure Node Instances',
          'loading': 'Loading configuration from Oracle Cloud Infrastructure'
        },
        'instance': {
          'title':  'Node Instance Configuration',
          'detail': 'Configure the instance that will be used as nodes in the cluster.'
        },
        'os':          { 'label': 'Operating System' },
        'storageType': { 'label': 'Default Persistent Volume Disk Type' },
        'storageSize': {
          'label':       'Default Persistent Volume Disk Size',
          'placeholder': 'e.g. 10',
          'error':       'Default Persistent Volume Disk Size should be greater than 0'
        },
        'localDisk': {
          'label':       'Local Disk',
          'placeholder': '{size} GB(Self-selection is not supported for the time being)'
        },
        'subnetAccessOptions': {
          'quick':    'Quick Create',
          'custom':   'Custom Create',
          'existing': 'Existing',

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
  },
};

/* !!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/

export default Ember.Component.extend(ClusterDriver, {
  // 'okeEngineConfig googleKubernetesEngineConfig'
  app:            service(),
  router:         service(),
  session:        service(),
  /* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
  intl:           service(),
  civo:         service(),

  driverName:     '%%DRIVERNAME%%',
  configField:    '%%DRIVERNAME%%EngineConfig',
  layout:         null,
  versionChoices: [],
  clusterQuota:   null,
  imageChioces:   [],
  allImages:      [],
  zoneResource:   null,
  instanceConfig:  '',

  newTag:         '',
  selectedNodePoolType: '',
  selectedNodePoolObj: {

  },
  selectedNodePoolList: [],

  step:            1,
  lanChanged:      null,
  refresh:         false,
  vcnCreationMode: '',

  isNew:   equal('mode', 'new'),
  editing: equal('mode', 'edit'),
  config:  alias('cluster.%%DRIVERNAME%%EngineConfig'),
  init() {
    /* !!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template = Ember.HTMLBars.compile(decodedLayout, { moduleName: 'shared/components/cluster-driver/driver-%%DRIVERNAME%%/template' });

    set(this, 'layout', template);
    this._super(...arguments);
    /* !!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/
    const lang = get(this, 'session.language');

    get(this, 'intl.locale');
    this.loadLanguage(lang);

    // let config      = get(this, 'config');
    let config = get(this, 'cluster.%%DRIVERNAME%%EngineConfig');
    let configField = get(this, 'configField');


    if (!config) {
      // TODO config = get(this, 'globalStore').createRecord({
      config = this.get('globalStore').createRecord({
        type:              configField,
        name: "",
        label: "",
        description: "",
        apiKey: "",
        networkId: "",
        cniPlugin: "",
        firewallId: "",
        region: "LON1",
        kubernetesVersion: "1.25.0-k3s1",
        nodePools: [],
        quantityPerSubnet: 1,
      });

      set(this, 'cluster.%%DRIVERNAME%%EngineConfig', config);
    }

    // for node pools
    set(this, "selectedNodePoolType", "")
    set(this, "selectedNodePoolObj", {});
    set(this, "selectedNodePoolList", this.prefillSelectedNodePoolList());


    // init cpu and memory
    const {
      cpu,
      memory
    } = get(this, 'config');

    if (cpu && memory) {
      set(this, 'instanceConfig', `${ get(this, 'config.cpu') }/${ get(this, 'config.memory') }`);
    }
  },

  actions: {

    // TODO implement authenticateOCI


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
        hash({
          regions: this.civo.request(auth, 'regions'),
          nodeTypes: this.civo.request(auth, 'linode/types'),
          k8sVersions: this.civo.request(auth, 'lke/versions'),
        }).then((responses) => {
          this.setProperties({
            errors: [],
            step: 2,
            regions: responses.regions.data.filter(region => (region.status === "ok" && region.capabilities.includes("Kubernetes"))),
            nodeTypes: responses.nodeTypes.data.filter(type => (type.class !== 'nanode' && type.class !== 'gpu')),
            k8sVersions: responses.k8sVersions.data,
          });
          cb(true);
        }).catch((err) => {
          if (err && err.body && err.body.errors && err.body.errors[0]) {
            errors.push(`Error received from Linode: ${ err.body.errors[0].reason }`);
          } else {
            errors.push(`Error received from Linode`);
          }

          this.setProperties({ errors, });
          cb(false);
        });
      }
    },

    authenticateOCI(cb) {
      let errors = get(this, 'errors') || [];




      setProperties(this, {

        'errors':                                       null,
        // 'cluster.%%DRIVERNAME%%EngineConfig.userOcid':  (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.userOcid') || '').trim(),
        'cluster.%%DRIVERNAME%%EngineConfig.apiKey': (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.apiKey') || '').trim(),
        // 'cluster.%%DRIVERNAME%%EngineConfig.privateKeyPassphrase':  (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.privateKeyPassphrase') || '').trim(),
        // 'cluster.%%DRIVERNAME%%EngineConfig.region':    (get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region')),

      });



      set(this, 'step', 2);
      cb(true);
    },

    // TODO re-implement loadNodeConfig
    loadNodeConfig(cb) {
      setProperties(this, { 'errors': null });

      const errors = get(this, 'errors') || [];
      const intl = get(this, 'intl');

      const quantityPerSubnet = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.quantityPerSubnet');
      const kubernetesVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');

      console.log(quantityPerSubnet)
      console.log(kubernetesVersion)

      if (!quantityPerSubnet) {
        errors.push(intl.t('clusterNew.civo.quantityPerSubnet.required'));
      } else {
        const maxNodeCount = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.maxNodeCount');

        if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
          errors.push(intl.t('clusterNew.civo.quantityPerSubnet.error', { max: maxNodeCount }));
        }
      }
      if (!kubernetesVersion) {
        errors.push(intl.t('clusterNew.civo.version.required'));
      }

      console.log(errors)

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb();

        return;
      }


      setProperties(this, {
        // 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion':   quantityPerSubnet,
        // 'cluster.%%DRIVERNAME%%EngineConfig.quantityPerSubnet':   kubernetesVersion,
      });


      set(this, 'step', 3);
      cb(true);
    },

    // TODO implement loadInstanceConfig
    loadInstanceConfig(cb) {
      let errors = get(this, 'errors') || [];
      let intl = get(this, 'intl');

      const region = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region');
      const networkId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.networkId');
      const cniPlugin = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.cniPlugin');
      const firewallId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.firewallId');

      if (!region) {
        errors.push(intl.t('clusterNew.civo.region.required'));
      } else {
        // const maxNodeCount = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.maxNodeCount');

        // if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
        //   errors.push(intl.t('clusterNew.civo.quantityPerSubnet.error', { max: maxNodeCount }));
        // }
      }
      if (!networkId) {
        errors.push(intl.t('clusterNew.civo.networkId.required'));
      }

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb(false);

        return;
      }


      setProperties(this, {
        'cluster.%%DRIVERNAME%%EngineConfig.region':      region,
        'cluster.%%DRIVERNAME%%EngineConfig.networkId':   networkId,
        'cluster.%%DRIVERNAME%%EngineConfig.cniPlugin':   cniPlugin,
        'cluster.%%DRIVERNAME%%EngineConfig.firewallId':   firewallId,
      });


      set(this, 'errors', null);
      set(this, 'step', 4);
      cb(true);
    },
    upgradeCluster(cb) {


      this.send('driverSave', cb);
    },
    // for node pools
    addSelectedNodePool() {
      const selectedNodePoolObj = get(this, "selectedNodePoolObj");
      const tags = get(this, "selectedNodePoolList") || [];


      const selectedNodePoolType = get(this, "selectedNodePoolType");

      console.log(selectedNodePoolObj)
      console.log(selectedNodePoolType)



      if (selectedNodePoolObj) {
        tags.pushObject(selectedNodePoolObj);
        set(this, "cluster.%%DRIVERNAME%%EngineConfig.selectedNodePoolList", tags);
        set(this, "selectedNodePoolList", tags);

        set(this, "selectedNodePoolType", "");
        set(this, "selectedNodePoolObj", {});
      }
    },
    deleteNodePool(id) {
      const selectedNodePoolList = get(this, "selectedNodePoolList");

      set(this, "selectedNodePoolList", selectedNodePoolList.filter(n => n.id !== id))
    },
    save(cb) {
      setProperties(this, {
        'errors':        null,
        'otherErrors':   null,
        'clusterErrors': null,
      });

      const errors = get(this, 'errors') || [];

      if (errors.length > 0) {
        set(this, 'errors', errors);
        cb(false);

        return;
      }

      if (!this.verifyNodePoolConfig()) {
        cb(false);
      }


      if (!this.validate()) {
        cb(false);

        return;
      }

      this.send('driverSave', cb);
    },
    cancel() {
      get(this, 'router').transitionTo('global-admin.clusters.index');
    },
    cpuAndMemoryChanged(item) {
      setProperties(this, {
        'config.cpu':    item.raw.cpuCount,
        'config.memory': item.raw.memoryCapacityInGB
      });
    }
  },

  // Any computed properties or custom logic can go here
  languageChanged: observer('intl.locale', function() {
    const lang = get(this, 'intl.locale');

    if (lang) {
      this.loadLanguage(lang[0]);
    }
  }),
  clusterNameChanged: observer('cluster.name', function() {
    const clusterName = get(this, 'cluster.name');
    set(this, 'cluster.%%DRIVERNAME%%EngineConfig.clusterName', clusterName);
  }),
  accessTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.access.title');
  }),
  accessDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.access.detail');
  }),
  clusterTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.cluster.title');
  }),
  clusterDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.cluster.detail');
  }),
  virtualCloudNetworkTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.vcn.title');
  }),
  virtualCloudNetworkDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.vcn.detail');
  }),
  instanceTitle: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.instance.title');
  }),
  instanceDetail: computed('intl.locale', 'lanChanged', function() {
    return get(this, 'intl').t('clusterNew.civo.instance.detail');
  }),
  maxNodeCount: computed('clusterQuota.slave', () => {
    return 256;
  }),
  regionChoices: Object.entries(regionMap).map((e) => ({
    label: e[0],
    value: e[1]
  })),
  selectedRegion: computed('cluster.%%DRIVERNAME%%EngineConfig.region', function() {
    const region = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region');

    return region;
  }),
  nodeShapeChoices: Object.entries(nodeShapeMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  selectednodeShape: computed('cluster.%%DRIVERNAME%%EngineConfig.nodeShape', function() {
    const nodeShape = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeShape');

    return nodeShape && nodeShapeMap[nodeShape];
  }),
  k8sVersionChoices: Object.entries(k8sVersionMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  k8sUpgradeVersionChoices: computed('cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion', function() {
    let supportedVersions = Object.assign({}, k8sVersionMap);
    var currentVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');

    var cv = currentVersion.split('.').map((v) => {
      return parseInt(v, 10);
    });

    const filtered = Object.keys(supportedVersions)
      .filter((key) => (!this.k8sUpgradableTo(currentVersion, key) == 1))
      .forEach((key) => delete supportedVersions[key]);

    return Object.entries(supportedVersions).map((e) => ({
      label: e[1],
      value: e[0]
    }));
  }),
  selectedk8sVersion: computed('cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion', function() {
    const k8sVersion = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.kubernetesVersion');

    console.log(k8sVersion)

    return k8sVersion && k8sVersionMap[k8sVersion];
  }),
  canAuthenticate: computed('cluster.%%DRIVERNAME%%EngineConfig.apiKey', function() {
    return get(this, 'cluster.%%DRIVERNAME%%EngineConfig.apiKey') ? false : true;
  }),

  canSaveVCN: computed('cluster.%%DRIVERNAME%%EngineConfig.region', 'cluster.%%DRIVERNAME%%EngineConfig.networkId', 'cluster.%%DRIVERNAME%%EngineConfig.cniPlugin', 'cluster.%%DRIVERNAME%%EngineConfig.firewallId', function() {
    return get(this, 'cluster.%%DRIVERNAME%%EngineConfig.region') ? false : true &&
           get(this, 'cluster.%%DRIVERNAME%%EngineConfig.networkId') ? false : true &&
           get(this, 'cluster.%%DRIVERNAME%%EngineConfig.cniPlugin') ? false : true &&
            get(this, 'cluster.%%DRIVERNAME%%EngineConfig.firewallId') ? false : true;
  }),

  selectedNodePoolType: computed('selectedNodePoolType', function() {


    const nodePoolType = get(this, 'selectedNodePoolType');

    console.log(nodePoolType)

    return nodePoolType;
  }),

  canCreateCluster: computed('cluster.%%DRIVERNAME%%EngineConfig.nodePools', function() {
    return get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodePools') ? false : true;
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
  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = get(this, 'errors') || [];

    if (!get(this, 'cluster.name')) {
      errors.push('Name is required');
    }

    // const tenancyId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.tenancyId');

    // if (!tenancyId.startsWith('ocid1.tenancy')) {
    //   errors.push('A valid tenancy OCID is required');
    // }

    // const compartmentId = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.compartmentId');

    // if (!compartmentId.startsWith('ocid1.compartment') && !compartmentId.startsWith('ocid1.tenancy')) {
    //   errors.push('A valid compartment OCID is required');
    // }

    // const userOcid = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.userOcid');

    // if (!userOcid.startsWith('ocid1.user')) {
    //   errors.push('A valid user OCID is required');
    // }

    // TODO Add more specific errors

    // Set the array of errors for display,
    // and return true if saving should continue.
    if (get(errors, 'length')) {
      set(this, 'errors', errors);

      return false;
    } else {
      set(this, 'errors', null);

      return true;
    }
  },

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

  k8sUpgradableTo(currVer, toVer) {
    if (typeof currVer !== 'string') {
      return false;
    }
    if (typeof toVer !== 'string') {
      return false;
    }

    currVer = currVer.substr(1);
    toVer = toVer.substr(1);
    currVer = currVer.split('.');
    toVer = toVer.split('.');

    var len = Math.max(currVer.length, toVer.length);

    for (var i = 0; i < len; i++) {
      if ((toVer[i] || 0) > (currVer[i] || 0)) {
        return true
      } else if ((toVer[i] || 0) < (currVer[i] || 0)) {
        return false
      }
    }

    return true;
  },

  // For Node Pool Configuration Step
  nodePoolConfigTitle: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.title");
  }),
  nodePoolConfigDetail: computed('intl.locale', 'langChanged', function() {
    return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.description");
  }),

  // for node pool choises
  nodePoolChoises: Object.entries(nodeShapeMap).map((e) => ({
    label: e[1],
    value: e[0]
  })),
  // setSelectedNodePoolObj: computed('cluster.%%DRIVERNAME%%EngineConfig.nodeShape', function() {
  //   const nodeShape = get(this, 'cluster.%%DRIVERNAME%%EngineConfig.nodeShape');

  //   return nodeShape && nodeShapeMap[nodeShape];
  // }),

  // nodePoolChoises: computed("nodeTypes.[]", "selectedNodePoolList.[]", async function() {
  //   const intl = get(this, 'intl');
  //   const ans = await get(this, "nodeTypes");
  //   const filteredAns = ans.filter(np => {
  //     // filter out the already selected node pools
  //     const selectedNodePoolList = get(this, "selectedNodePoolList");
  //     const fnd = selectedNodePoolList.find(snp => snp.id === np.id);
  //     if (fnd) return false;
  //     else return true;
  //   }).map(np => {
  //     return {
  //       label: np.label,
  //       value: np.id
  //     }
  //   });
  //   return [{label: intl.t("clusterNew.civo.nodePools.placeholder"), value: ""}, ...filteredAns];
  // }),
  setSelectedNodePoolObj: observer("selectedNodePoolType", async function() {
    const selectedNodePoolType = get(this, "selectedNodePoolType");

    if (selectedNodePoolType) {
      let id = this.uuidv4();
      console.log(nodeShapeMap)
      const ans = nodeShapeMap[selectedNodePoolType]

console.log("ans", ans)

      set(this, "selectedNodePoolObj", { id: id, count: 1, size: ans});
    } else set(this, "selectedNodePoolObj", {});
  }),
  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  },
  setNodePools: observer("selectedNodePoolList.@each.count", function() {
    const selectedNodePoolList = get(this, "selectedNodePoolList");
    const nodePools = selectedNodePoolList.map(np => {
      return `${np.id}=${np.size}-${np.count}`
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

    console.log(nodePools)
    // const ans = nodeShapeMap[selectedNodePoolType]
    const nodePoolTypes = nodeShapeMap


    console.log(nodePoolTypes)

    if (nodePools && nodePools.length) {
      set(this, "selectedNodePoolList", nodePools.map(np => {

        console.log(np)

        const [npId, cnt] = np.split("=");

        console.log(npId, cnt)

        const fnd = nodePoolTypes[npId];
        if (fnd) {
          return {...fnd, count: cnt};
        } else return { id: npId, count: cnt, label: npId};
      }));
    } else {
      set(this, "selectedNodePoolList", []);
    }
  },
});
