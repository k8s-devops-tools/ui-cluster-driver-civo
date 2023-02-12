"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iYXBpS2V5IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKCiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDEpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICBzYXZlPSJhdXRoZW50aWNhdGVPQ0kiCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgc2F2ZURpc2FibGVkPWNhbkF1dGhlbnRpY2F0ZQogICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uYWNjZXNzLm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5hY2Nlc3MubG9hZGluZyIKICAgIH19CiAge3svaWZ9fQoKICB7eyNpZiAoYW5kIChndGUgc3RlcCAyKSAoZXEgbW9kZSAnZWRpdCcpKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1jbHVzdGVyVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckRldGFpbAogICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KICA8ZGl2IGNsYXNzPSJyb3ciPgoKCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnJlZ2lvbi5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPXNlbGVjdGVkUmVnaW9ufX0KICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1yZWdpb25DaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcucmVnaW9uCiAgICAgICAgfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8udmVyc2lvbi5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9c2VsZWN0ZWRrOHNWZXJzaW9ufX0KICAgICAge3tuZXctc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9azhzVXBncmFkZVZlcnNpb25DaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldH19CiAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSBtYXg9bWF4Tm9kZUNvdW50IHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQucGxhY2Vob2xkZXInKX19CiAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj4KICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5oZWxwJ319CiAgICAgIDwvcD4KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICB7eyEtLSBleGl0IHBvaW50IGZvciB1cGRhdGUvdXBncmFkZSAtLX19CiAge3sjaWYgcmVmcmVzaH19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0idXBncmFkZUNsdXN0ZXIiCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAge3svaWZ9fQoKICB7e2Vsc2V9fQogIHt7I2lmIChndGUgc3RlcCAyKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1jbHVzdGVyVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckRldGFpbAogICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by52ZXJzaW9uLmxhYmVsJ319PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDIpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZGs4c1ZlcnNpb259fQogICAgICB7e25ldy1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1rOHNWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0fX0KICAgICAge3tpbnB1dC1pbnRlZ2VyIG1pbj0xIG1heD1tYXhOb2RlQ291bnQgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0IGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5wbGFjZWhvbGRlcicpfX0KICAgICAgPHAgY2xhc3M9ImhlbHAtYmxvY2siPgogICAgICAgIHt7dCAnY2x1c3Rlck5ldy5jaXZvLnF1YW50aXR5UGVyU3VibmV0LmhlbHAnfX0KICAgICAgPC9wPgogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgMikpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgICBzYXZlPSJsb2FkTm9kZUNvbmZpZyIKICAgICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uY2x1c3Rlci5uZXh0IgogICAgICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmNsdXN0ZXIubG9hZGluZyIKICAgICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3sjaWYgKGd0ZSBzdGVwIDMpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPXZpcnR1YWxDbG91ZE5ldHdvcmtUaXRsZQogICAgICAgICAgZGV0YWlsPXZpcnR1YWxDbG91ZE5ldHdvcmtEZXRhaWwKICAgICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucmVnaW9uLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShlcSBtb2RlICJuZXciKSB2YWx1ZT1zZWxlY3RlZFJlZ2lvbn19CiAgICAgICAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnJlZ2lvbgogICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ubmV0d29ya0lkLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5ldHdvcmtJZAogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJuZXR3b3JrSWQiCiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0odCAiY2x1c3Rlck5ldy5jaXZvLm5ldHdvcmtJZC5wbGFjZWhvbGRlciIpCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubmV0d29ya0lkCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmNuaVBsdWdpbi5sYWJlbCJ9fQogICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5jbmlQbHVnaW4KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgICAgbmFtZT0iY25pUGx1Z2luIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5jbmlQbHVnaW4ucGxhY2Vob2xkZXIiKQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmNuaVBsdWdpbgogICAgICAgICAgICAgIH19CiAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5jaXZvLmZpcmV3YWxsSWQubGFiZWwifX0KICAgICAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgIGVkaXRhYmxlPXRydWUKICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcuZmlyZXdhbGxJZAogICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7aW5wdXQKICAgICAgICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICAgICAgICBuYW1lPSJmaXJld2FsbElkIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcuY2l2by5maXJld2FsbElkLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5maXJld2FsbElkCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDMpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0ibG9hZEluc3RhbmNlQ29uZmlnIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICAgICAgc2F2ZURpc2FibGVkPWNhblNhdmVWQ04KICAgICAgICAgICAgY3JlYXRlTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlLm5leHQiCiAgICAgICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZS5sb2FkaW5nIgogICAgICAgIH19CiAge3svaWZ9fQogIHt7L2lmfX0KICB7eyNpZiAoZ3RlIHN0ZXAgNCl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgdGl0bGU9aW5zdGFuY2VUaXRsZQogICAgICAgICAgZGV0YWlsPWluc3RhbmNlRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgICB7eyEgc2VsZWN0IG5vZGUgcG9vbCB9fQogICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8uc2VsZWN0ZWROb2RlUG9vbFR5cGUubGFiZWwifX0KICAgICAgICA8L2xhYmVsPgogICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9dHJ1ZSB2YWx1ZT1zZWxlY3RlZE5vZGVQb29sVHlwZX19CiAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgY29udGVudD1ub2RlUG9vbENob2lzZXMKICAgICAgICAgICAgdmFsdWU9c2VsZWN0ZWROb2RlUG9vbFR5cGUKICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgTW9udGhseToKICAgICAgICA8L2Rpdj4KICAgICAgICAkCiAgICAgICAge3t0aGlzLnNlbGVjdGVkTm9kZVBvb2xPYmoucHJpY2UubW9udGhseX19CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgSG91cmx5OgogICAgICAgIDwvZGl2PgogICAgICAgICQKICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5wcmljZS5ob3VybHl9fQogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgIFJBTToKICAgICAgICA8L2Rpdj4KICAgICAgICB7e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5tZW1vcnlHYn19CiAgICAgICAgR0IKICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICBDUFVzOgogICAgICAgIDwvZGl2PgogICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLnZjcHVzfX0KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICBTdG9yYWdlOgogICAgICAgIDwvZGl2PgogICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLmRpc2tHYn19CiAgICAgICAgR0IKICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICBDb3VudDoKICAgICAgICA8L2Rpdj4KICAgICAgICA8SW5wdXQKICAgICAgICAgIEB0eXBlPSJudW1iZXIiCiAgICAgICAgICBAbWluPSIxIgogICAgICAgICAgQHZhbHVlPXt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLmNvdW50fX0KICAgICAgICAvPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTEwIj4KICAgICAgICAgIEFjdGlvbnMKICAgICAgICA8L2Rpdj4KICAgICAgICA8YnV0dG9uCiAgICAgICAgICBjbGFzcz0iYnRuIGJnLXByaW1hcnkgaWNvbi1idG4gcC0wIgogICAgICAgICAge3thY3Rpb24gImFkZFNlbGVjdGVkTm9kZVBvb2wifX0KICAgICAgICA+CiAgICAgICAgICA8c3BhbiBjbGFzcz0iZGFya2VuIj4KICAgICAgICAgICAgPGkgY2xhc3M9Imljb24gaWNvbi1wbHVzIHRleHQtc21hbGwiPjwvaT4KICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDxzcGFuPgogICAgICAgICAgICBBZGQgTm9kZSBQb29sCiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC9idXR0b24+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJlbWJlci12aWV3Ij4KICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIG10LTIwIGNsZWFyZml4Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJwdWxsLWxlZnQiPgogICAgICAgICAgPGgyIGNsYXNzPSJtYi0wIj4KICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3LmNpdm8ubm9kZVBvb2xzLmxhYmVsIn19CiAgICAgICAgICA8L2gyPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBzb3J0YWJsZS10YWJsZSBlbWJlci12aWV3Ij4KICAgICAgICA8dGFibGUgY2xhc3M9ImZpeGVkIGdyaWQgc29ydGFibGUtdGFibGUiPgogICAgICAgICAgPHRoZWFkPgogICAgICAgICAgICA8dHIgY2xhc3M9ImZpeGVkLWhlYWRlciI+CiAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgTGFiZWwKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgIE1vbnRobHkgJAogICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgIDwvdGg+CiAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgSG91cmx5ICQKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgIFJBTSAoR0IpCiAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICBDUFVzCiAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPgogICAgICAgICAgICAgICAgICBTdG9yYWdlIChHQikKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgIDx0aCBsYXNzPSJzb3J0YWJsZSBlbWJlci12aWV3IiByb2xlPSJjb2x1bW5oZWFkZXIiPgogICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgIENvdW50CiAgICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgIDxhIGNsYXNzPSJidG4gYmctdHJhbnNwYXJlbnQiPjwvYT4KICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICA8L3RyPgogICAgICAgICAgPC90aGVhZD4KICAgICAgICAgIDx0Ym9keT4KICAgICAgICAgICAge3sjZWFjaCB0aGlzLnNlbGVjdGVkTm9kZVBvb2xMaXN0IGFzIHxzZWxlY3RlZE5vZGVQb29sfH19CiAgICAgICAgICAgICAgPHRyIGNsYXNzPSJtYWluLXJvdyBlbWJlci12aWV3Ij4KICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLmxhYmVsfX0KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5tb250aGx5fX0KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5wcmljZS5ob3VybHl9fQogICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLm1lbW9yeUdifX0KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC52Y3B1c319CiAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wuZGlza0difX0KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgIDxJbnB1dAogICAgICAgICAgICAgICAgICAgIEB0eXBlPSJudW1iZXIiCiAgICAgICAgICAgICAgICAgICAgQG1pbj0iMSIKICAgICAgICAgICAgICAgICAgICBAdmFsdWU9e3tzZWxlY3RlZE5vZGVQb29sLmNvdW50fX0KICAgICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9InRleHQtY2VudGVyIj4KICAgICAgICAgICAgICAgICAgPGJ1dHRvbgogICAgICAgICAgICAgICAgICAgIGNsYXNzPSJidG4gYmctZXJyb3IgYnRuLXNtIgogICAgICAgICAgICAgICAgICAgIHt7YWN0aW9uICJkZWxldGVOb2RlUG9vbCIgc2VsZWN0ZWROb2RlUG9vbC5pZH19CiAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXRyYXNoIj48L2k+CiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICB7e2Vsc2V9fQogICAgICAgICAgICAgIDx0ciBjbGFzcz0ibWFpbi1yb3cgZW1iZXItdmlldyI+CiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj0iOCIgY2xhc3M9InAtMTAgdGV4dC1jZW50ZXIiPgogICAgICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlUG9vbHMuZW1wdHkifX0KICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAge3svZWFjaH19CiAgICAgICAgICA8L3Rib2R5PgogICAgICAgIDwvdGFibGU+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICB7eyEgc2hvdyBzZWxlY3RlZCBub2RlIHBvb2xzIGVuZCB9fQogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCA0KSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICBzYXZlRGlzYWJsZWQ9Y2FuQ3JlYXRlQ2x1c3RlcgogICAgICAgICAgc2F2ZT0ic2F2ZSIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3svaWZ9fQoKCiAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9b3RoZXJFcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9Y2x1c3RlckVycm9yc319CiAge3svYWNjb3JkaW9uLWxpc3R9fQo8L3NlY3Rpb24+';
  const computed = Ember.computed;
  const equal = Ember.computed.equal;
  const observer = Ember.observer;
  const get = Ember.get;
  const set = Ember.set;
  const setProperties = Ember.setProperties;
  const alias = Ember.computed.alias;
  const service = Ember.inject.service;
  const all = Ember.RSVP.all;
  const hash = Ember.RSVP.hash;
  const next = Ember.run.next;
  const regionMap = {
    'New York 1': 'NYC1',
    'Frankfurt 1': 'FRA1',
    'London 1': 'LON1',
    'Phoenix 1': 'PHX1'
  };
  const k8sVersionMap = {
    '1.23.6-k3s1': '1.23.6-k3s1',
    '1.24.4-k3s1': '1.24.4-k3s1',
    '1.25.0-k3s1': '1.25.0-k3s1'
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
          'access': {
            'next': 'Next: Authenticate & Configure Cluster',
            'loading': 'Loading values from Civo',
            'title': 'Civo Account Configuration',
            'detail': 'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
          },
          'region': {
            'label': 'Region'
          },
          'apiKey': {
            'next': 'Proceed to Cluster Configuration',
            'label': 'API key is required',
            'placeholder': 'The API key to use for accessing your Civo account',
            'required': 'API key is required'
          },
          'cluster': {
            'title': 'Cluster Configuration',
            'detail': 'Choose the Kubernetes version and the number of nodes per subnet for the cluster.',
            'next': 'Next: Configure Virtual Cloud Network',
            'loading': 'Loading VCNs from Oracle Cloud Infrastructure'
          },
          'vcn': {
            'title': 'Virtual Cloud Network',
            'detail': 'Configure the virtual cloud network that will be used for your Kubernetes cluster.',
            'label': 'Virtual Cloud Network',
            'required': 'VCN is required'
          },
          'version': {
            'label': 'Kubernetes Version',
            'required': 'Kubernetes Version is required'
          },
          'cidr': {
            'label': 'Virtual Cloud Network CIDR',
            'placeholder': 'e.g. 172.16.0.0/16',
            'required': 'Virtual Cloud Network CIDR is required',
            'error': 'Virtual Cloud CIDR format error'
          },
          'existingVCNDetails': {
            'compartmentOCID': 'OCID of the VCN\'s compartment',
            'compartmentOCIDPlaceholder': 'e.g. ocid1.compartment.oc1..aaaaaaaa...',
            'compartmentOCIDHelp': 'leave blank if it\'s the cluster compartment',
            'vcnName': 'Name of the pre-existing VCN',
            'vcnNamePlaceholder': 'e.g. my-vcn',
            'lbSubnetName1': 'Name of first pre-existing LB subnet',
            'lbSubnetName1Placeholder': 'e.g. my-lb-sub-1',
            'lbSubnetName2': 'Name of second pre-existing LB subnet (if applicable)',
            'lbSubnetName2Placeholder': 'e.g. my-lb-sub-2'
          },
          'quantityPerSubnet': {
            'label': 'Nodes Per Subnet Count',
            'placeholder': 'e.g. 1',
            'required': 'Nodes per subnet is required',
            'help': 'The quantity of nodes nodes to run in each worker subnet',
            'error': 'The count of nodes should not be greater than {max}'
          },
          'nodeShape': {
            'label': 'Instance Shape',
            'required': 'Instance Shape is required'
          },
          'nodeSSHKey': {
            'label': 'SSH public key for nodes',
            'placeholder': 'Optional SSH public key for the nodes'
          },
          'instanceConfig': {
            'label': 'Instance Configuration(CPU/Memory)',
            'gpuLabel': 'Instance Configuration(CPU/Memory/GPU Type/GPU Count)',
            'required': 'Instance Configuration is required'
          },
          'subnet': {
            'label': 'Subnet Access',
            'required': 'Subnet access is required'
          },
          'node': {
            'title': 'Node Type',
            'detail': 'Choose the node type that will be used for this Kubernetes cluster',
            'next': 'Next: Configure Node Instances',
            'loading': 'Loading configuration from Oracle Cloud Infrastructure'
          },
          'instance': {
            'title': 'Node Instance Configuration',
            'detail': 'Configure the instance that will be used as nodes in the cluster.'
          },
          'os': {
            'label': 'Operating System'
          },
          'storageType': {
            'label': 'Default Persistent Volume Disk Type'
          },
          'storageSize': {
            'label': 'Default Persistent Volume Disk Size',
            'placeholder': 'e.g. 10',
            'error': 'Default Persistent Volume Disk Size should be greater than 0'
          },
          'localDisk': {
            'label': 'Local Disk',
            'placeholder': '{size} GB(Self-selection is not supported for the time being)'
          },
          'subnetAccessOptions': {
            'quick': 'Quick Create',
            'custom': 'Custom Create',
            'existing': 'Existing'
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
    civo: service(),
    driverName: 'civo',
    configField: 'civoEngineConfig',
    layout: null,
    versionChoices: [],
    clusterQuota: null,
    imageChioces: [],
    allImages: [],
    zoneResource: null,
    instanceConfig: '',
    selectedNodePoolType: '',
    selectedNodePoolObj: {},
    selectedNodePoolList: [],
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
          name: "",
          label: "",
          description: "",
          apiKey: "",
          networkId: "",
          cniPlugin: "",
          firewallId: "",
          region: "LON1",
          kubernetesVersion: "1.18",
          nodePools: [],
          clusterName: '',
          vcnCidr: '10.0.0.0/16',
          kubernetesVersion: 'v1.17.9',
          region: 'us-phoenix-1',
          quantityPerSubnet: 1
        });
        set(this, 'cluster.civoEngineConfig', config);
      }

      set(this, "selectedNodePoolType", "");
      set(this, "selectedNodePoolObj", {});
      set(this, "selectedNodePoolList", this.prefillSelectedNodePoolList());
      const {
        cpu,
        memory
      } = get(this, 'config');

      if (cpu && memory) {
        set(this, 'instanceConfig', `${get(this, 'config.cpu')}/${get(this, 'config.memory')}`);
      }
    },

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
        } else {
          hash({
            regions: this.civo.request(auth, 'regions'),
            nodeTypes: this.civo.request(auth, 'linode/types'),
            k8sVersions: this.civo.request(auth, 'lke/versions')
          }).then(responses => {
            this.setProperties({
              errors: [],
              step: 2,
              regions: responses.regions.data.filter(region => region.status === "ok" && region.capabilities.includes("Kubernetes")),
              nodeTypes: responses.nodeTypes.data.filter(type => type.class !== 'nanode' && type.class !== 'gpu'),
              k8sVersions: responses.k8sVersions.data
            });
            cb(true);
          }).catch(err => {
            if (err && err.body && err.body.errors && err.body.errors[0]) {
              errors.push(`Error received from Linode: ${err.body.errors[0].reason}`);
            } else {
              errors.push(`Error received from Linode`);
            }

            this.setProperties({
              errors
            });
            cb(false);
          });
        }
      },

      authenticateOCI(cb) {
        let errors = get(this, 'errors') || [];
        setProperties(this, {
          'errors': null,
          'cluster.civoEngineConfig.apiKey': (get(this, 'cluster.civoEngineConfig.apiKey') || '').trim()
        });
        set(this, 'step', 2);
        cb(true);
      },

      loadNodeConfig(cb) {
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

        setProperties(this, {
          'cluster.civoEngineConfig.kubernetesVersion': quantityPerSubnet,
          'cluster.civoEngineConfig.quantityPerSubnet': kubernetesVersion
        });
        set(this, 'step', 3);
        cb(true);
      },

      loadInstanceConfig(cb) {
        let errors = get(this, 'errors') || [];
        let intl = get(this, 'intl');
        const region = get(this, 'cluster.civoEngineConfig.region');
        const networkId = get(this, 'cluster.civoEngineConfig.networkId');
        const cniPlugin = get(this, 'cluster.civoEngineConfig.cniPlugin');
        const firewallId = get(this, 'cluster.civoEngineConfig.firewallId');

        if (!region) {
          errors.push(intl.t('clusterNew.civo.region.required'));
        } else {}

        if (!networkId) {
          errors.push(intl.t('clusterNew.civo.networkId.required'));
        }

        if (errors.length > 0) {
          set(this, 'errors', errors);
          cb(false);
          return;
        }

        setProperties(this, {
          'cluster.civoEngineConfig.region': region,
          'cluster.civoEngineConfig.networkId': networkId,
          'cluster.civoEngineConfig.cniPlugin': cniPlugin,
          'cluster.civoEngineConfig.firewallId': firewallId
        });
        set(this, 'errors', null);
        set(this, 'step', 4);
        cb(true);
      },

      upgradeCluster(cb) {
        this.send('driverSave', cb);
      },

      addSelectedNodePool() {
        alert('blaat');
        console.log('asdasdsad');
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
    canAuthenticate: computed('cluster.civoEngineConfig.apiKey', function () {
      return get(this, 'cluster.civoEngineConfig.apiKey') ? false : true;
    }),
    canSaveVCN: computed('cluster.civoEngineConfig.region', 'cluster.civoEngineConfig.networkId', 'cluster.civoEngineConfig.cniPlugin', 'cluster.civoEngineConfig.firewallId', function () {
      return get(this, 'cluster.civoEngineConfig.region') ? false : true && get(this, 'cluster.civoEngineConfig.networkId') ? false : true && get(this, 'cluster.civoEngineConfig.cniPlugin') ? false : true && get(this, 'cluster.civoEngineConfig.firewallId') ? false : true;
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
    },

    nodePoolConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.title");
    }),
    nodePoolConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.civo.nodePoolConfig.description");
    }),
    nodePoolChoises: Object.entries(nodeShapeMap).map(e => ({
      label: e[1],
      value: e[0]
    })),
    setSelectedNodePoolObj: computed('cluster.civoEngineConfig.nodeShape', function () {
      const nodeShape = get(this, 'cluster.civoEngineConfig.nodeShape');
      return nodeShape && nodeShapeMap[nodeShape];
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
