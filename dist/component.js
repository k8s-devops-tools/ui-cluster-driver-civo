"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8YWwgZXhwYW5kRm58fX0KICAgIHt7I2lmIChlcSBzdGVwIDEpfX0KICAgICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbQogICAgICAgIHRpdGxlPWFwaUtleVRpdGxlCiAgICAgICAgZGV0YWlsPWFwaUtleURldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xMiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5hcGlLZXkudGl0bGUifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuYXBpS2V5CiAgICAgICAgICAgIH19CiAgICAgICAgICAgICAge3tpbnB1dAogICAgICAgICAgICAgICAgdHlwZT0icGFzc3dvcmQiCiAgICAgICAgICAgICAgICBuYW1lPSJhY2Nlc3NUb2tlbiIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5hcGlLZXkKICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgICB7e3NhdmUtY2FuY2VsCiAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5hcGlLZXkubmV4dCIKICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5sb2FkaW5nIgogICAgICAgIHNhdmU9InZlcmlmeUFwaUtleSIKICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICAgIHt7ZWxzZSBpZiAoZXEgc3RlcCAyKX19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT1jbHVzdGVyQ29uZmlnVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckNvbmZpZ0RldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLm5hbWUubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubmFtZQogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJuYW1lIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5uYW1lLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5uYW1lCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucmVnaW9uLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPXNlbGVjdGVkUmVnaW9ufX0KICAgICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcucmVnaW9uCiAgICAgICAgICAgIH19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgICB7eyEtLSA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLnJlZ2lvbi5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5yZWdpb24KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2lzZXMKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5yZWdpb24KICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PiAtLX19CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLm5ldHdvcmtJZC5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5uZXR3b3JrSWQKICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0ibmV0d29ya0lkIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5uZXR3b3JrSWQucGxhY2Vob2xkZXIiKQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5ldHdvcmtJZAogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmNuaVBsdWdpbi5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5jbmlQbHVnaW4KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0iY25pUGx1Z2luIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5jbmlQbHVnaW4ucGxhY2Vob2xkZXIiKQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmNuaVBsdWdpbgogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmZpcmV3YWxsSWQubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuZmlyZXdhbGxJZAogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJmaXJld2FsbElkIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5maXJld2FsbElkLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5maXJld2FsbElkCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ua3ViZXJuZXRlc1ZlcnNpb24ubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PWs4c1ZlcnNpb25DaG9pc2VzCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgICB7e3NhdmUtY2FuY2VsCiAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyQ29uZmlnLm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyQ29uZmlnLmxvYWRpbmciCiAgICAgICAgc2F2ZT0idmVyaWZ5Q2x1c3RlckNvbmZpZyIKICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICAgIHt7ZWxzZSBpZiAoZXEgc3RlcCAzKX19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT1ub2RlUG9vbENvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPW5vZGVQb29sQ29uZmlnRGV0YWlsCiAgICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgIH19CiAgICAgICAge3shIHNlbGVjdCBub2RlIHBvb2wgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5zZWxlY3RlZE5vZGVQb29sVHlwZS5sYWJlbCJ9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPXRydWUgdmFsdWU9c2VsZWN0ZWROb2RlUG9vbFR5cGV9fQogICAgICAgICAgICAgIHt7bmV3LXNlbGVjdAogICAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIGNvbnRlbnQ9bm9kZVBvb2xDaG9pc2VzCiAgICAgICAgICAgICAgICB2YWx1ZT1zZWxlY3RlZE5vZGVQb29sVHlwZQogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBNb250aGx5OgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgJAogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5wcmljZS5tb250aGx5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgSG91cmx5OgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgJAogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5wcmljZS5ob3VybHl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBSQU06CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5tZW1vcnlHYn19CiAgICAgICAgICAgIEdCCiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIENQVXM6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai52Y3B1c319CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIFN0b3JhZ2U6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5kaXNrR2J9fQogICAgICAgICAgICBHQgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICBDb3VudDoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxJbnB1dAogICAgICAgICAgICAgIEB0eXBlPSJudW1iZXIiCiAgICAgICAgICAgICAgQG1pbj0iMSIKICAgICAgICAgICAgICBAdmFsdWU9e3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmouY291bnR9fQogICAgICAgICAgICAvPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTEwIj4KICAgICAgICAgICAgICBBY3Rpb25zCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgY2xhc3M9ImJ0biBiZy1wcmltYXJ5IGljb24tYnRuIHAtMCIKICAgICAgICAgICAgICB7e2FjdGlvbiAiYWRkU2VsZWN0ZWROb2RlUG9vbCJ9fQogICAgICAgICAgICA+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRhcmtlbiI+CiAgICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXBsdXMgdGV4dC1zbWFsbCI+PC9pPgogICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICA8c3Bhbj4KICAgICAgICAgICAgICAgIEFkZCBOb2RlIFBvb2wKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZW1iZXItdmlldyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXIgbXQtMjAgY2xlYXJmaXgiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwdWxsLWxlZnQiPgogICAgICAgICAgICAgIDxoMiBjbGFzcz0ibWItMCI+CiAgICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbHMubGFiZWwifX0KICAgICAgICAgICAgICA8L2gyPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBzb3J0YWJsZS10YWJsZSBlbWJlci12aWV3Ij4KICAgICAgICAgICAgPHRhYmxlIGNsYXNzPSJmaXhlZCBncmlkIHNvcnRhYmxlLXRhYmxlIj4KICAgICAgICAgICAgICA8dGhlYWQ+CiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9ImZpeGVkLWhlYWRlciI+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgTGFiZWwKICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgTW9udGhseSAkCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIEhvdXJseSAkCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIFJBTSAoR0IpCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIENQVXMKICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZSAoR0IpCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIENvdW50CiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij48L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgIDwvdGhlYWQ+CiAgICAgICAgICAgICAgPHRib2R5PgogICAgICAgICAgICAgICAge3sjZWFjaCB0aGlzLnNlbGVjdGVkTm9kZVBvb2xMaXN0IGFzIHxzZWxlY3RlZE5vZGVQb29sfH19CiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz0ibWFpbi1yb3cgZW1iZXItdmlldyI+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLmxhYmVsfX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5tb250aGx5fX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5ob3VybHl9fQogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLm1lbW9yeUdifX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC52Y3B1c319CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wuZGlza0difX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dAogICAgICAgICAgICAgICAgICAgICAgICBAdHlwZT0ibnVtYmVyIgogICAgICAgICAgICAgICAgICAgICAgICBAbWluPSIxIgogICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWU9e3tzZWxlY3RlZE5vZGVQb29sLmNvdW50fX0KICAgICAgICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9InRleHQtY2VudGVyIj4KICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24KICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9ImJ0biBiZy1lcnJvciBidG4tc20iCiAgICAgICAgICAgICAgICAgICAgICAgIHt7YWN0aW9uICJkZWxldGVOb2RlUG9vbCIgc2VsZWN0ZWROb2RlUG9vbC5pZH19CiAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJpY29uIGljb24tdHJhc2giPjwvaT4KICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICB7e2Vsc2V9fQogICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9Im1haW4tcm93IGVtYmVyLXZpZXciPgogICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPSI4IiBjbGFzcz0icC0xMCB0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbHMuZW1wdHkifX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAge3svZWFjaH19CiAgICAgICAgICAgICAgPC90Ym9keT4KICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIHt7ISBzaG93IHNlbGVjdGVkIG5vZGUgcG9vbHMgZW5kIH19CiAgICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogICAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICAgIHt7I2lmIChlcSBtb2RlICJlZGl0Iil9fQogICAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xDb25maWcudXBkYXRlIgogICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5sb2FkaW5nIgogICAgICAgICAgc2F2ZT0idXBkYXRlQ2x1c3RlciIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAgICAgIHt7ZWxzZX19CiAgICAgICAge3tzYXZlLWNhbmNlbAogICAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5uZXh0IgogICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5sb2FkaW5nIgogICAgICAgICAgc2F2ZT0iY3JlYXRlQ2x1c3RlciIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAgICAgIHt7L2lmfX0KICAgIHt7L2lmfX0KCiAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9b3RoZXJFcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9Y2x1c3RlckVycm9yc319CiAge3svYWNjb3JkaW9uLWxpc3R9fQo8L3NlY3Rpb24+';
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
    'New York 1': 'NYC1',
    'Frankfurt 1': 'FRA1',
    'London 1': 'LON1',
    'Phoenix 1': 'PHX1'
  };
  const k8sVersions = [];
  const newTag = "";
  const selectedNodePoolType = "";
  const selectedNodePoolObj = {};
  const selectedNodePoolList = [];
  const computed = Ember.computed;
  const observer = Ember.observer;
  const get = Ember.get;
  const set = Ember.set;
  const alias = Ember.computed.alias;
  const service = Ember.inject.service;
  const hash = Ember.RSVP.hash;
  const next = Ember.run.next;
  const defaultRadix = 10;
  const defaultBase = 1024;
  exports.default = Ember.Component.extend(_clusterDriver.default, {
    driverName: 'civo',
    configField: 'civoEngineConfig',
    app: service(),
    router: service(),
    session: service(),
    intl: service(),
    linode: service(),
    step: 1,
    lanChanged: null,
    refresh: false,

    init() {
      const decodedLayout = window.atob(LAYOUT);
      const template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'shared/components/cluster-driver/driver-civo/template'
      });
      set(this, 'layout', template);

      this._super(...arguments);

      const lang = get(this, 'session.language');
      get(this, 'intl.locale');
      this.loadLanguage(lang);
      let config = get(this, 'config');
      let configField = get(this, 'configField');
      set(this, "selectedNodePoolType", "");
      set(this, "selectedNodePoolObj", {});
      set(this, "selectedNodePoolList", this.prefillSelectedNodePoolList());

      if (!config) {
        config = this.get('globalStore').createRecord({
          type: configField,
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
        set(this, 'cluster.civoEngineConfig', config);
      }
    },

    config: alias('cluster.civoEngineConfig'),
    actions: {
      verifyApiKey(cb) {
        const auth = {
          token: get(this, "cluster.civoEngineConfig.apiKey")
        };
        let errors = [];
        const intl = get(this, "intl");

        if (!auth.token) {
          errors.push(intl.t("clusterNew.civo.apiKey.required"));
          set(this, "errors", errors);
          cb(false);
        } else {}
      },

      verifyClusterConfig(cb) {
        const tags = get(this, "cluster.civoEngineConfig.tags");

        if (!tags) {
          set(this, "cluster.civoEngineConfig.tags", []);
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

      cancelFunc(cb) {
        get(this, 'router').transitionTo('global-admin.clusters.index');
        cb(true);
      },

      addNewTag() {
        const tags = get(this, "cluster.civoEngineConfig.tags") || [];
        const newTag = get(this, "newTag");

        if (newTag) {
          tags.pushObject(newTag);
          set(this, "cluster.civoEngineConfig.tags", tags);
          set(this, "newTag", "");
        }
      },

      deleteTag(idx) {
        const tags = get(this, "cluster.civoEngineConfig.tags") || [];
        set(this, "cluster.civoEngineConfig.tags", tags.filter((tag, index) => index !== idx));
      },

      addSelectedNodePool() {
        const selectedNodePoolObj = get(this, "selectedNodePoolObj");
        const selectedNodePoolList = get(this, "selectedNodePoolList");

        if (selectedNodePoolObj.id) {
          selectedNodePoolList.pushObject(selectedNodePoolObj);
          set(this, "selectedNodePoolType", "");
          set(this, "selectedNodePoolObj", {});
        }
      },

      deleteNodePool(id) {
        const selectedNodePoolList = get(this, "selectedNodePoolList");
        set(this, "selectedNodePoolList", selectedNodePoolList.filter(n => n.id !== id));
      }

    },

    validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'cluster.name')) {
        errors.push('Name is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },

    languageChanged: observer('intl.locale', function () {
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

    apiKeyTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.apiKey.title");
    }),
    apiKeyDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.apiKey.description");
    }),
    clusterConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.clusterConfig.title");
    }),
    clusterConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.clusterConfig.description");
    }),
    regionChoices: Object.entries(regionMap).map(e => ({
      label: e[0],
      value: e[1]
    })),
    selectedRegion: computed('cluster.civoEngineConfig.region', function () {
      const region = get(this, 'cluster.civoEngineConfig.region');
      return region;
    }),
    regionChoises: computed('regions', async function () {
      const ans = await get(this, "regions");
      return ans.map(e => {
        return {
          label: e.id,
          value: e.id
        };
      });
    }),
    k8sVersionChoises: computed("k8sVersions.[]", function () {
      const k8sVersions = get(this, "k8sVersions");
      return k8sVersions.map(v => {
        return {
          label: v.id,
          value: v.id
        };
      });
    }),
    nodePoolConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.title");
    }),
    nodePoolConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.description");
    }),
    nodePoolChoises: computed("nodeTypes.[]", "selectedNodePoolList.[]", async function () {
      const intl = get(this, 'intl');
      const ans = await get(this, "nodeTypes");
      const filteredAns = ans.filter(np => {
        const selectedNodePoolList = get(this, "selectedNodePoolList");
        const fnd = selectedNodePoolList.find(snp => snp.id === np.id);
        if (fnd) return false;else return true;
      }).map(np => {
        return {
          label: np.label,
          value: np.id
        };
      });
      return [{
        label: intl.t("clusterNew.civo.nodePools.placeholder"),
        value: ""
      }, ...filteredAns];
    }),
    setSelectedNodePoolObj: observer("selectedNodePoolType", async function () {
      const nodePoolTypes = await get(this, "nodeTypes");
      const selectedNodePoolType = get(this, "selectedNodePoolType");

      if (selectedNodePoolType) {
        const ans = nodePoolTypes.find(np => np.id === selectedNodePoolType);
        set(this, "selectedNodePoolObj", { ...ans,
          count: 1,
          memoryGb: ans.memory / 1024,
          diskGb: ans.disk / 1024
        });
      } else set(this, "selectedNodePoolObj", {});
    }),
    setNodePools: observer("selectedNodePoolList.@each.count", function () {
      const selectedNodePoolList = get(this, "selectedNodePoolList");
      const nodePools = selectedNodePoolList.map(np => {
        return `${np.id}=${np.count}`;
      });
      set(this, "cluster.civoEngineConfig.nodePools", nodePools);
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

    prefillSelectedNodePoolListObserver: observer("nodeTypes.[]", function () {
      this.prefillSelectedNodePoolList();
    }),

    async prefillSelectedNodePoolList() {
      const nodePools = get(this, "cluster.civoEngineConfig.nodePools");
      const nodePoolTypes = await get(this, "nodeTypes");

      if (nodePools && nodePools.length) {
        set(this, "selectedNodePoolList", nodePools.map(np => {
          const [npId, cnt] = np.split("=");
          const fnd = nodePoolTypes.find(npt => npt.id === npId);

          if (fnd) {
            return { ...fnd,
              count: cnt
            };
          } else return {
            id: npId,
            count: cnt,
            label: npId
          };
        }));
      } else {
        set(this, "selectedNodePoolList", []);
      }
    }

  });
});
"use strict";

define("ui/components/cluster-driver/driver-civo/component", ["exports", "shared/components/cluster-driver/driver-civo/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define.alias('shared/components/cluster-driver/driver-civo/component', 'global-admin/components/cluster-driver/driver-civo/component');
