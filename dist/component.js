"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8YWwgZXhwYW5kRm58fX0KICAgIHt7I2lmIChlcSBzdGVwIDEpfX0KICAgICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbQogICAgICAgIHRpdGxlPWFwaUtleVRpdGxlCiAgICAgICAgZGV0YWlsPWFwaUtleURldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xMiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5hcGlLZXkudGl0bGUifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuYXBpS2V5CiAgICAgICAgICAgIH19CiAgICAgICAgICAgICAge3tpbnB1dAogICAgICAgICAgICAgICAgdHlwZT0icGFzc3dvcmQiCiAgICAgICAgICAgICAgICBuYW1lPSJhY2Nlc3NUb2tlbiIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5hcGlLZXkKICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgICB7e3NhdmUtY2FuY2VsCiAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5hcGlLZXkubmV4dCIKICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5sb2FkaW5nIgogICAgICAgIHNhdmU9InZlcmlmeUFwaUtleSIKICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICAgIHt7ZWxzZSBpZiAoZXEgc3RlcCAyKX19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT1jbHVzdGVyQ29uZmlnVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckNvbmZpZ0RldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLm5hbWUubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubmFtZQogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJuYW1lIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5uYW1lLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5uYW1lCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ucmVnaW9uLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnJlZ2lvbgogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7bmV3LXNlbGVjdAogICAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIGNvbnRlbnQ9cmVnaW9uQ2hvaXNlcwogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnJlZ2lvbgogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLm5ldHdvcmtJZC5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5uZXR3b3JrSWQKICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0ibmV0d29ya0lkIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5uZXR3b3JrSWQucGxhY2Vob2xkZXIiKQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5ldHdvcmtJZAogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmNuaVBsdWdpbi5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5jbmlQbHVnaW4KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0iY25pUGx1Z2luIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5jbmlQbHVnaW4ucGxhY2Vob2xkZXIiKQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmNuaVBsdWdpbgogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmZpcmV3YWxsSWQubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuZmlyZXdhbGxJZAogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJmaXJld2FsbElkIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5maXJld2FsbElkLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5maXJld2FsbElkCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ua3ViZXJuZXRlc1ZlcnNpb24ubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PWs4c1ZlcnNpb25DaG9pc2VzCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgICB7e3NhdmUtY2FuY2VsCiAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyQ29uZmlnLm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyQ29uZmlnLmxvYWRpbmciCiAgICAgICAgc2F2ZT0idmVyaWZ5Q2x1c3RlckNvbmZpZyIKICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICAgIHt7ZWxzZSBpZiAoZXEgc3RlcCAzKX19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT1ub2RlUG9vbENvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPW5vZGVQb29sQ29uZmlnRGV0YWlsCiAgICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgIH19CiAgICAgICAge3shIHNlbGVjdCBub2RlIHBvb2wgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5zZWxlY3RlZE5vZGVQb29sVHlwZS5sYWJlbCJ9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPXRydWUgdmFsdWU9c2VsZWN0ZWROb2RlUG9vbFR5cGV9fQogICAgICAgICAgICAgIHt7bmV3LXNlbGVjdAogICAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIGNvbnRlbnQ9bm9kZVBvb2xDaG9pc2VzCiAgICAgICAgICAgICAgICB2YWx1ZT1zZWxlY3RlZE5vZGVQb29sVHlwZQogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBNb250aGx5OgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgJAogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5wcmljZS5tb250aGx5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgSG91cmx5OgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgJAogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5wcmljZS5ob3VybHl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBSQU06CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5tZW1vcnlHYn19CiAgICAgICAgICAgIEdCCiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIENQVXM6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai52Y3B1c319CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIFN0b3JhZ2U6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5kaXNrR2J9fQogICAgICAgICAgICBHQgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICBDb3VudDoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxJbnB1dAogICAgICAgICAgICAgIEB0eXBlPSJudW1iZXIiCiAgICAgICAgICAgICAgQG1pbj0iMSIKICAgICAgICAgICAgICBAdmFsdWU9e3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmouY291bnR9fQogICAgICAgICAgICAvPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTEwIj4KICAgICAgICAgICAgICBBY3Rpb25zCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgY2xhc3M9ImJ0biBiZy1wcmltYXJ5IGljb24tYnRuIHAtMCIKICAgICAgICAgICAgICB7e2FjdGlvbiAiYWRkU2VsZWN0ZWROb2RlUG9vbCJ9fQogICAgICAgICAgICA+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRhcmtlbiI+CiAgICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXBsdXMgdGV4dC1zbWFsbCI+PC9pPgogICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICA8c3Bhbj4KICAgICAgICAgICAgICAgIEFkZCBOb2RlIFBvb2wKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZW1iZXItdmlldyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXIgbXQtMjAgY2xlYXJmaXgiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwdWxsLWxlZnQiPgogICAgICAgICAgICAgIDxoMiBjbGFzcz0ibWItMCI+CiAgICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbHMubGFiZWwifX0KICAgICAgICAgICAgICA8L2gyPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBzb3J0YWJsZS10YWJsZSBlbWJlci12aWV3Ij4KICAgICAgICAgICAgPHRhYmxlIGNsYXNzPSJmaXhlZCBncmlkIHNvcnRhYmxlLXRhYmxlIj4KICAgICAgICAgICAgICA8dGhlYWQ+CiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9ImZpeGVkLWhlYWRlciI+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgTGFiZWwKICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgTW9udGhseSAkCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIEhvdXJseSAkCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIFJBTSAoR0IpCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIENQVXMKICAgICAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZSAoR0IpCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIENvdW50CiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij48L2E+CiAgICAgICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgIDwvdGhlYWQ+CiAgICAgICAgICAgICAgPHRib2R5PgogICAgICAgICAgICAgICAge3sjZWFjaCB0aGlzLnNlbGVjdGVkTm9kZVBvb2xMaXN0IGFzIHxzZWxlY3RlZE5vZGVQb29sfH19CiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz0ibWFpbi1yb3cgZW1iZXItdmlldyI+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLmxhYmVsfX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5tb250aGx5fX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5ob3VybHl9fQogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLm1lbW9yeUdifX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC52Y3B1c319CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wuZGlza0difX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dAogICAgICAgICAgICAgICAgICAgICAgICBAdHlwZT0ibnVtYmVyIgogICAgICAgICAgICAgICAgICAgICAgICBAbWluPSIxIgogICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWU9e3tzZWxlY3RlZE5vZGVQb29sLmNvdW50fX0KICAgICAgICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9InRleHQtY2VudGVyIj4KICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24KICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9ImJ0biBiZy1lcnJvciBidG4tc20iCiAgICAgICAgICAgICAgICAgICAgICAgIHt7YWN0aW9uICJkZWxldGVOb2RlUG9vbCIgc2VsZWN0ZWROb2RlUG9vbC5pZH19CiAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJpY29uIGljb24tdHJhc2giPjwvaT4KICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgIDwvdHI+CiAgICAgICAgICAgICAgICB7e2Vsc2V9fQogICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9Im1haW4tcm93IGVtYmVyLXZpZXciPgogICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPSI4IiBjbGFzcz0icC0xMCB0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbHMuZW1wdHkifX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAge3svZWFjaH19CiAgICAgICAgICAgICAgPC90Ym9keT4KICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIHt7ISBzaG93IHNlbGVjdGVkIG5vZGUgcG9vbHMgZW5kIH19CiAgICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogICAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICAgIHt7I2lmIChlcSBtb2RlICJlZGl0Iil9fQogICAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xDb25maWcudXBkYXRlIgogICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5sb2FkaW5nIgogICAgICAgICAgc2F2ZT0idXBkYXRlQ2x1c3RlciIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAgICAgIHt7ZWxzZX19CiAgICAgICAge3tzYXZlLWNhbmNlbAogICAgICAgICAgYnRuTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5uZXh0IgogICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbENvbmZpZy5sb2FkaW5nIgogICAgICAgICAgc2F2ZT0iY3JlYXRlQ2x1c3RlciIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAgICAgIHt7L2lmfX0KICAgIHt7L2lmfX0KICB7ey9hY2NvcmRpb24tbGlzdH19Cjwvc2VjdGlvbj4=';
  const computed = Ember.computed;
  const equal = Ember.computed.equal;
  const observer = Ember.observer;
  const get = Ember.get;
  const set = Ember.set;
  const setProperties = Ember.setProperties;
  const alias = Ember.computed.alias;
  const service = Ember.inject.service;
  const all = Ember.RSVP.all;
  const next = Ember.run.next;
  const regionMap = {
    'Mumbai': 'ap-mumbai-1',
    'Seoul': 'ap-seoul-1',
    'Tokyo': 'ap-tokyo-1',
    'Toronto': 'ca-toronto-1',
    'Frankfurt': 'eu-frankfurt-1',
    'Zurich': 'eu-zurich-1',
    'Sao Paolo': 'sa-saopaulo-1',
    'London': 'uk-london-1',
    'Ashburn': 'us-ashburn-1',
    'Phoenix': 'us-phoenix-1',
    'Amsterdam': 'eu-amsterdam-1',
    'Hyderabad': 'ap-hyderabad-1',
    'Jeddah': 'me-jeddah-1',
    'Osaka': 'ap-osaka-1',
    'Melbourne': 'ap-melbourne-1',
    'Sydney': 'ap-sydney-1',
    'Chuncheon': 'ap-chuncheon-1',
    'Montreal': 'ca-montreal-1'
  };
  const k8sVersionMap = {
    'v1.17.9': 'v1.17.9',
    'v1.16.8': 'v1.16.8',
    'v1.15.7': 'v1.15.7',
    'v1.14.8': 'v1.14.8'
  };
  const vcnIdMap = {
    quick: 'Quick Create'
  };
  const subnetAccessMap = {
    public: 'Public',
    private: 'Private'
  };
  const nodeShapeMap = {
    'VM.Standard1.1': 'VM.Standard1.1',
    'VM.Standard1.2': 'VM.Standard1.2',
    'VM.Standard1.4': 'VM.Standard1.4',
    'VM.Standard1.8': 'VM.Standard1.8',
    'VM.Standard1.16': 'VM.Standard1.16',
    'VM.Standard.B1.1': 'VM.Standard.B1.1',
    'VM.Standard.B1.2': 'VM.Standard.B1.2',
    'VM.Standard.B1.4': 'VM.Standard.B1.4',
    'VM.Standard.B1.8': 'VM.Standard.B1.8',
    'VM.Standard.B1.16': 'VM.Standard.B1.16',
    'VM.Standard2.1': 'VM.Standard2.1',
    'VM.Standard2.2': 'VM.Standard2.2',
    'VM.Standard2.4': 'VM.Standard2.4',
    'VM.Standard2.8': 'VM.Standard2.8',
    'VM.Standard2.16': 'VM.Standard2.16',
    'VM.Standard2.24': 'VM.Standard2.24',
    'VM.Standard.E2.1.Micro': 'VM.Standard.E2.1.Micro',
    'VM.Standard.E2.1': 'VM.Standard.E2.1',
    'VM.Standard.E2.2': 'VM.Standard.E2.2',
    'VM.Standard.E2.4': 'VM.Standard.E2.4',
    'VM.Standard.E2.8': 'VM.Standard.E2.8',
    'BM.Standard1.36': 'BM.Standard1.36',
    'BM.Standard.B1.44': 'BM.Standard.B1.44',
    'BM.Standard2.52': 'BM.Standard2.52',
    'BM.Standard.E2.64': 'BM.Standard.E2.64',
    'BM.Standard.E3.128': 'BM.Standard.E3.128',
    'VM.DenseIO2.8': 'VM.DenseIO2.8',
    'VM.DenseIO2.16': 'VM.DenseIO2.16',
    'VM.DenseIO2.24': 'VM.DenseIO2.24',
    'BM.DenseIO2.52': 'BM.DenseIO2.52',
    'BM.HPC2.36': 'BM.HPC2.36',
    'VM.GPU2.1': 'VM.GPU2.1',
    'VM.GPU3.1': 'VM.GPU3.1',
    'VM.GPU3.2': 'VM.GPU3.2',
    'VM.GPU3.4': 'VM.GPU3.4'
  };
  const imageMap = {
    'Oracle-Linux-7.6': 'Oracle-Linux-7.6',
    'Oracle-Linux-7.5': 'Oracle-Linux-7.5',
    'Oracle-Linux-7.4': 'Oracle-Linux-7.4'
  };
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
  exports.default = Ember.Component.extend(_clusterDriver.default, {
    app: service(),
    router: service(),
    session: service(),
    intl: service(),
    driverName: 'civo',
    configField: 'civoEngineConfig',
    layout: null,
    versionChoices: [],
    clusterQuota: null,
    imageChioces: [],
    allImages: [],
    zoneResource: null,
    instanceConfig: '',
    step: 1,
    lanChanged: null,
    refresh: false,
    vcnCreationMode: '',
    isNew: equal('mode', 'new'),
    editing: equal('mode', 'edit'),
    config: alias('cluster.civoEngineConfig'),

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
      let config = get(this, 'cluster.civoEngineConfig');
      let configField = get(this, 'configField');

      if (!config) {
        config = this.get('globalStore').createRecord({
          type: configField,
          secretKey: '',
          clusterName: '',
          vcnCidr: '10.0.0.0/16',
          kubernetesVersion: 'v1.17.9',
          region: 'us-phoenix-1',
          vcn: '',
          securityListId: '',
          subnetAccess: 'public',
          cpu: 0,
          memory: 0,
          quantityPerSubnet: 1
        });
        set(this, 'cluster.civoEngineConfig', config);
      }

      const {
        cpu,
        memory
      } = get(this, 'config');

      if (cpu && memory) {
        set(this, 'instanceConfig', `${get(this, 'config.cpu')}/${get(this, 'config.memory')}`);
      }
    },

    actions: {
      authenticateOCI(cb) {
        setProperties(this, {
          'errors': null,
          'cluster.civoEngineConfig.userOcid': (get(this, 'cluster.civoEngineConfig.userOcid') || '').trim(),
          'cluster.civoEngineConfig.secretKey': (get(this, 'cluster.civoEngineConfig.secretKey') || '').trim(),
          'cluster.civoEngineConfig.privateKeyPassphrase': (get(this, 'cluster.civoEngineConfig.privateKeyPassphrase') || '').trim(),
          'cluster.civoEngineConfig.region': get(this, 'cluster.civoEngineConfig.region')
        });
        const errors = get(this, 'errors') || [];
        set(this, 'step', 2);
        cb(true);
      },

      loadNodeConfig(cb) {
        set(this, 'step', 3);
        cb(true);
      },

      loadInstanceConfig(cb) {
        set(this, 'errors', null);
        set(this, 'step', 4);
        cb(true);
      },

      upgradeCluster(cb) {
        setProperties(this, {
          'errors': null
        });
        const errors = get(this, 'errors') || [];
        const intl = get(this, 'intl');
        const quantityPerSubnet = get(this, 'cluster.civoEngineConfig.quantityPerSubnet');
        const kubernetesVersion = get(this, 'cluster.civoEngineConfig.kubernetesVersion');

        if (!quantityPerSubnet) {
          errors.push(intl.t('clusterNew.civo.quantityPerSubnet.required'));
        } else {
          const maxNodeCount = get(this, 'cluster.civoEngineConfig.maxNodeCount');

          if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
            errors.push(intl.t('clusterNew.civo.quantityPerSubnet.error', {
              max: maxNodeCount
            }));
          }
        }

        if (!kubernetesVersion) {
          errors.push(intl.t('clusterNew.civo.version.required'));
        }

        if (errors.length > 0) {
          set(this, 'errors', errors);
          cb();
          return;
        }

        this.send('driverSave', cb);
      },

      save(cb) {
        setProperties(this, {
          'errors': null,
          'otherErrors': null,
          'clusterErrors': null
        });
        const errors = get(this, 'errors') || [];

        if (errors.length > 0) {
          set(this, 'errors', errors);
          cb(false);
          return;
        }

        if (!this.validate()) {
          cb(false);
          return;
        }

        if (get(this, 'cluster.civoEngineConfig.nodeImage') == '') {
          set(this, 'cluster.civoEngineConfig.nodeImage', imageMap['Oracle-Linux-7.6']);
        }

        if (get(this, 'cluster.civoEngineConfig.subnetAccess') == 'public') {
          set(this, 'cluster.civoEngineConfig.enablePrivateNodes', false);
        } else {
          set(this, 'cluster.civoEngineConfig.enablePrivateNodes', true);
        }

        this.send('driverSave', cb);
      },

      cancel() {
        get(this, 'router').transitionTo('global-admin.clusters.index');
      },

      cpuAndMemoryChanged(item) {
        setProperties(this, {
          'config.cpu': item.raw.cpuCount,
          'config.memory': item.raw.memoryCapacityInGB
        });
      }

    },
    languageChanged: observer('intl.locale', function () {
      const lang = get(this, 'intl.locale');

      if (lang) {
        this.loadLanguage(lang[0]);
      }
    }),
    clusterNameChanged: observer('cluster.name', function () {
      const clusterName = get(this, 'cluster.name');
      set(this, 'cluster.civoEngineConfig.clusterName', clusterName);
    }),
    accessTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.access.title');
    }),
    accessDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.access.detail');
    }),
    clusterTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.cluster.title');
    }),
    clusterDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.cluster.detail');
    }),
    virtualCloudNetworkTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.vcn.title');
    }),
    virtualCloudNetworkDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.vcn.detail');
    }),
    instanceTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.instance.title');
    }),
    instanceDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.civo.instance.detail');
    }),
    maxNodeCount: computed('clusterQuota.slave', () => {
      return 256;
    }),
    regionChoices: Object.entries(regionMap).map(e => ({
      label: e[0],
      value: e[1]
    })),
    selectedRegion: computed('cluster.civoEngineConfig.region', function () {
      const region = get(this, 'cluster.civoEngineConfig.region');
      return region;
    }),
    vcnChoices: Object.entries(vcnIdMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    selectedVCN: computed('cluster.civoEngineConfig.vcnId', function () {
      const vcnId = get(this, 'cluster.civoEngineConfig.vcnId');
      return vcnId && vcnIdMap[vcnId];
    }),
    subnetAccessChoices: Object.entries(subnetAccessMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    selectedSubnetAccess: computed('cluster.civoEngineConfig.subnetAccess', function () {
      const subnetAccess = get(this, 'cluster.civoEngineConfig.subnetAccess');
      return subnetAccess && subnetAccessMap[subnetAccess];
    }),
    nodeShapeChoices: Object.entries(nodeShapeMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    selectednodeShape: computed('cluster.civoEngineConfig.nodeShape', function () {
      const nodeShape = get(this, 'cluster.civoEngineConfig.nodeShape');
      return nodeShape && nodeShapeMap[nodeShape];
    }),
    imageChoices: Object.entries(imageMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    selectedImage: computed('cluster.civoEngineConfig.nodeImage', function () {
      const nodeImage = get(this, 'cluster.civoEngineConfig.nodeImage');
      return nodeImage && imageMap[nodeImage];
    }),
    k8sVersionChoices: Object.entries(k8sVersionMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    k8sUpgradeVersionChoices: computed('cluster.civoEngineConfig.kubernetesVersion', function () {
      let supportedVersions = Object.assign({}, k8sVersionMap);
      var currentVersion = get(this, 'cluster.civoEngineConfig.kubernetesVersion');
      var cv = currentVersion.split('.').map(v => {
        return parseInt(v, 10);
      });
      const filtered = Object.keys(supportedVersions).filter(key => !this.k8sUpgradableTo(currentVersion, key) == 1).forEach(key => delete supportedVersions[key]);
      return Object.entries(supportedVersions).map(e => ({
        label: e[1],
        value: e[0]
      }));
    }),
    selectedk8sVersion: computed('cluster.civoEngineConfig.kubernetesVersion', function () {
      const k8sVersion = get(this, 'cluster.civoEngineConfig.kubernetesVersion');
      return k8sVersion && k8sVersionMap[k8sVersion];
    }),
    canAuthenticate: computed('cluster.civoEngineConfig.tenancyId', 'cluster.civoEngineConfig.compartmentId', 'cluster.civoEngineConfig.userOcid', 'cluster.civoEngineConfig.fingerprint', 'cluster.civoEngineConfig.privateKeyContents', function () {
      return get(this, 'cluster.civoEngineConfig.tenancyId') && get(this, 'cluster.civoEngineConfig.compartmentId') && get(this, 'cluster.civoEngineConfig.userOcid') && get(this, 'cluster.civoEngineConfig.fingerprint') && get(this, 'cluster.civoEngineConfig.privateKeyContents') ? false : true;
    }),
    canSaveVCN: computed('vcnCreationMode', 'cluster.civoEngineConfig.vcnName', 'cluster.civoEngineConfig.loadBalancerSubnetName1', 'cluster.civoEngineConfig.loadBalancerSubnetName2', 'cluster.civoEngineConfig.subnetAccess', 'cluster.civoEngineConfig.vcnCidr', function () {
      const mode = get(this, 'vcnCreationMode');

      if (mode === 'Quick') {
        return false;
      } else if (mode === 'Existing') {
        return get(this, 'cluster.civoEngineConfig.vcnName') && get(this, 'cluster.civoEngineConfig.loadBalancerSubnetName1') ? false : true;
      } else if (mode === 'Custom') {
        return get(this, 'cluster.civoEngineConfig.subnetAccess') && get(this, 'cluster.civoEngineConfig.vcnCidr') ? false : true;
      }

      return true;
    }),
    canCreateCluster: computed('cluster.civoEngineConfig.nodeShape', function () {
      return get(this, 'cluster.civoEngineConfig.nodeShape') ? false : true;
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

    validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'cluster.name')) {
        errors.push('Name is required');
      }

      const tenancyId = get(this, 'cluster.civoEngineConfig.tenancyId');

      if (!tenancyId.startsWith('ocid1.tenancy')) {
        errors.push('A valid tenancy OCID is required');
      }

      const compartmentId = get(this, 'cluster.civoEngineConfig.compartmentId');

      if (!compartmentId.startsWith('ocid1.compartment') && !compartmentId.startsWith('ocid1.tenancy')) {
        errors.push('A valid compartment OCID is required');
      }

      const userOcid = get(this, 'cluster.civoEngineConfig.userOcid');

      if (!userOcid.startsWith('ocid1.user')) {
        errors.push('A valid user OCID is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
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
          return true;
        } else if ((toVer[i] || 0) < (currVer[i] || 0)) {
          return false;
        }
      }

      return true;
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
