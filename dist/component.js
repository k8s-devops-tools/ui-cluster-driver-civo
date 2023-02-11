"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8YWwgZXhwYW5kRm58fX0KICAgIHt7I2lmIChlcSBzdGVwIDEpfX0KICAgICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbWNpdm9FbmdpbmVDb25maWcKICAgICAgICB0aXRsZT1hcGlLZXlUaXRsZQogICAgICAgIGRldGFpbD1hcGlLZXlEZXRhaWwKICAgICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMTIiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnRpdGxlIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleQogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InBhc3N3b3JkIgogICAgICAgICAgICAgICAgbmFtZT0iYWNjZXNzVG9rZW4iCiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0odCAiY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5wbGFjZWhvbGRlciIpCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuYXBpS2V5CiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAgICAgIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KICAgICAge3tzYXZlLWNhbmNlbAogICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uYXBpS2V5Lm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5hcGlLZXkubG9hZGluZyIKICAgICAgICBzYXZlPSJ2ZXJpZnlBcGlLZXkiCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgIH19CiAgICB7e2Vsc2UgaWYgKGVxIHN0ZXAgMil9fQogICAgICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtCiAgICAgICAgdGl0bGU9Y2x1c3RlckNvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJDb25maWdEZXRhaWwKICAgICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5uYW1lLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5hbWUKICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0ibmFtZSIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8ubmFtZS5wbGFjZWhvbGRlciIpCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubmFtZQogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLnJlZ2lvbi5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5yZWdpb24KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2lzZXMKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5yZWdpb24KICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5uZXR3b3JrSWQubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubmV0d29ya0lkCiAgICAgICAgICAgIH19CiAgICAgICAgICAgICAge3tpbnB1dAogICAgICAgICAgICAgICAgdHlwZT0idGV4dCIKICAgICAgICAgICAgICAgIG5hbWU9Im5ldHdvcmtJZCIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8ubmV0d29ya0lkLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5uZXR3b3JrSWQKICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5jbmlQbHVnaW4ubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuY25pUGx1Z2luCiAgICAgICAgICAgIH19CiAgICAgICAgICAgICAge3tpbnB1dAogICAgICAgICAgICAgICAgdHlwZT0idGV4dCIKICAgICAgICAgICAgICAgIG5hbWU9ImNuaVBsdWdpbiIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8uY25pUGx1Z2luLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5jbmlQbHVnaW4KICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5maXJld2FsbElkLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmZpcmV3YWxsSWQKICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0iZmlyZXdhbGxJZCIKICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJjbHVzdGVyTmV3LmNpdm8uZmlyZXdhbGxJZC5wbGFjZWhvbGRlciIpCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuZmlyZXdhbGxJZAogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmt1YmVybmV0ZXNWZXJzaW9uLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmt1YmVybmV0ZXNWZXJzaW9uCiAgICAgICAgICAgIH19CiAgICAgICAgICAgICAge3tuZXctc2VsZWN0CiAgICAgICAgICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgY29udGVudD1rOHNWZXJzaW9uQ2hvaXNlcwogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmt1YmVybmV0ZXNWZXJzaW9uCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAgICAgIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KICAgICAge3tzYXZlLWNhbmNlbAogICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uY2x1c3RlckNvbmZpZy5uZXh0IgogICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8uY2x1c3RlckNvbmZpZy5sb2FkaW5nIgogICAgICAgIHNhdmU9InZlcmlmeUNsdXN0ZXJDb25maWciCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgIH19CiAgICB7e2Vsc2UgaWYgKGVxIHN0ZXAgMyl9fQogICAgICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtCiAgICAgICAgdGl0bGU9bm9kZVBvb2xDb25maWdUaXRsZQogICAgICAgIGRldGFpbD1ub2RlUG9vbENvbmZpZ0RldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIHt7ISBzZWxlY3Qgbm9kZSBwb29sIH19CiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8uc2VsZWN0ZWROb2RlUG9vbFR5cGUubGFiZWwifX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT10cnVlIHZhbHVlPXNlbGVjdGVkTm9kZVBvb2xUeXBlfX0KICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PW5vZGVQb29sQ2hvaXNlcwogICAgICAgICAgICAgICAgdmFsdWU9c2VsZWN0ZWROb2RlUG9vbFR5cGUKICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgTW9udGhseToKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICQKICAgICAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmoucHJpY2UubW9udGhseX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIEhvdXJseToKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICQKICAgICAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmoucHJpY2UuaG91cmx5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgUkFNOgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmoubWVtb3J5R2J9fQogICAgICAgICAgICBHQgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBDUFVzOgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmoudmNwdXN9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBTdG9yYWdlOgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmouZGlza0difX0KICAgICAgICAgICAgR0IKICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAgQ291bnQ6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8SW5wdXQKICAgICAgICAgICAgICBAdHlwZT0ibnVtYmVyIgogICAgICAgICAgICAgIEBtaW49IjEiCiAgICAgICAgICAgICAgQHZhbHVlPXt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLmNvdW50fX0KICAgICAgICAgICAgLz4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xMCI+CiAgICAgICAgICAgICAgQWN0aW9ucwogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGJ1dHRvbgogICAgICAgICAgICAgIGNsYXNzPSJidG4gYmctcHJpbWFyeSBpY29uLWJ0biBwLTAiCiAgICAgICAgICAgICAge3thY3Rpb24gImFkZFNlbGVjdGVkTm9kZVBvb2wifX0KICAgICAgICAgICAgPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJkYXJrZW4iPgogICAgICAgICAgICAgICAgPGkgY2xhc3M9Imljb24gaWNvbi1wbHVzIHRleHQtc21hbGwiPjwvaT4KICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgPHNwYW4+CiAgICAgICAgICAgICAgICBBZGQgTm9kZSBQb29sCiAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImVtYmVyLXZpZXciPgogICAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIG10LTIwIGNsZWFyZml4Ij4KICAgICAgICAgICAgPGRpdiBjbGFzcz0icHVsbC1sZWZ0Ij4KICAgICAgICAgICAgICA8aDIgY2xhc3M9Im1iLTAiPgogICAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xzLmxhYmVsIn19CiAgICAgICAgICAgICAgPC9oMj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImdyaWQgc29ydGFibGUtdGFibGUgZW1iZXItdmlldyI+CiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0iZml4ZWQgZ3JpZCBzb3J0YWJsZS10YWJsZSI+CiAgICAgICAgICAgICAgPHRoZWFkPgogICAgICAgICAgICAgICAgPHRyIGNsYXNzPSJmaXhlZC1oZWFkZXIiPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIExhYmVsCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIE1vbnRobHkgJAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBIb3VybHkgJAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBSQU0gKEdCKQogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBDUFVzCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UgKEdCKQogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBDb3VudAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+PC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICA8L3RoZWFkPgogICAgICAgICAgICAgIDx0Ym9keT4KICAgICAgICAgICAgICAgIHt7I2VhY2ggdGhpcy5zZWxlY3RlZE5vZGVQb29sTGlzdCBhcyB8c2VsZWN0ZWROb2RlUG9vbHx9fQogICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9Im1haW4tcm93IGVtYmVyLXZpZXciPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5sYWJlbH19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wucHJpY2UubW9udGhseX19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wucHJpY2UuaG91cmx5fX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5tZW1vcnlHYn19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wudmNwdXN9fQogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLmRpc2tHYn19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQKICAgICAgICAgICAgICAgICAgICAgICAgQHR5cGU9Im51bWJlciIKICAgICAgICAgICAgICAgICAgICAgICAgQG1pbj0iMSIKICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlPXt7c2VsZWN0ZWROb2RlUG9vbC5jb3VudH19CiAgICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPSJ0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSJidG4gYmctZXJyb3IgYnRuLXNtIgogICAgICAgICAgICAgICAgICAgICAgICB7e2FjdGlvbiAiZGVsZXRlTm9kZVBvb2wiIHNlbGVjdGVkTm9kZVBvb2wuaWR9fQogICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXRyYXNoIj48L2k+CiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAge3tlbHNlfX0KICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPSJtYWluLXJvdyBlbWJlci12aWV3Ij4KICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj0iOCIgY2xhc3M9InAtMTAgdGV4dC1jZW50ZXIiPgogICAgICAgICAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xzLmVtcHR5In19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICAgIHt7L2VhY2h9fQogICAgICAgICAgICAgIDwvdGJvZHk+CiAgICAgICAgICAgIDwvdGFibGU+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICB7eyEgc2hvdyBzZWxlY3RlZCBub2RlIHBvb2xzIGVuZCB9fQogICAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgICB7eyNpZiAoZXEgbW9kZSAiZWRpdCIpfX0KICAgICAgICB7e3NhdmUtY2FuY2VsCiAgICAgICAgICBidG5MYWJlbD0iY2x1c3Rlck5ldy5jaXZvLm5vZGVQb29sQ29uZmlnLnVwZGF0ZSIKICAgICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xDb25maWcubG9hZGluZyIKICAgICAgICAgIHNhdmU9InVwZGF0ZUNsdXN0ZXIiCiAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogICAgICB7e2Vsc2V9fQogICAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xDb25maWcubmV4dCIKICAgICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xDb25maWcubG9hZGluZyIKICAgICAgICAgIHNhdmU9ImNyZWF0ZUNsdXN0ZXIiCiAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogICAgICB7ey9pZn19CiAgICB7ey9pZn19CiAge3svYWNjb3JkaW9uLWxpc3R9fQo8L3NlY3Rpb24+';
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
