"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iYXBpS2V5IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKCiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDEpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICBzYXZlPSJhdXRoZW50aWNhdGVPQ0kiCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgc2F2ZURpc2FibGVkPWNhbkF1dGhlbnRpY2F0ZQogICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uYWNjZXNzLm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5hY2Nlc3MubG9hZGluZyIKICAgIH19CiAge3svaWZ9fQoKICB7eyNpZiAoYW5kIChndGUgc3RlcCAyKSAoZXEgbW9kZSAnZWRpdCcpKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1jbHVzdGVyVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckRldGFpbAogICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8udmVyc2lvbi5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9c2VsZWN0ZWRrOHNWZXJzaW9ufX0KICAgICAge3tuZXctc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9azhzVXBncmFkZVZlcnNpb25DaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldH19CiAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSBtYXg9bWF4Tm9kZUNvdW50IHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQucGxhY2Vob2xkZXInKX19CiAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj4KICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5oZWxwJ319CiAgICAgIDwvcD4KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICB7eyEtLSBleGl0IHBvaW50IGZvciB1cGRhdGUvdXBncmFkZSAtLX19CiAge3sjaWYgcmVmcmVzaH19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0idXBncmFkZUNsdXN0ZXIiCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAge3svaWZ9fQoKICB7e2Vsc2V9fQogIHt7I2lmIChndGUgc3RlcCAyKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1jbHVzdGVyVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckRldGFpbAogICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by52ZXJzaW9uLmxhYmVsJ319PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDIpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZGs4c1ZlcnNpb259fQogICAgICB7e25ldy1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1rOHNWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0fX0KICAgICAge3tpbnB1dC1pbnRlZ2VyIG1pbj0xIG1heD1tYXhOb2RlQ291bnQgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0IGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5wbGFjZWhvbGRlcicpfX0KICAgICAgPHAgY2xhc3M9ImhlbHAtYmxvY2siPgogICAgICAgIHt7dCAnY2x1c3Rlck5ldy5jaXZvLnF1YW50aXR5UGVyU3VibmV0LmhlbHAnfX0KICAgICAgPC9wPgogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgMikpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgICBzYXZlPSJsb2FkTm9kZUNvbmZpZyIKICAgICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3LmNpdm8uY2x1c3Rlci5uZXh0IgogICAgICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmNsdXN0ZXIubG9hZGluZyIKICAgICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3sjaWYgKGd0ZSBzdGVwIDMpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPXZpcnR1YWxDbG91ZE5ldHdvcmtUaXRsZQogICAgICAgICAgZGV0YWlsPXZpcnR1YWxDbG91ZE5ldHdvcmtEZXRhaWwKICAgICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCgogIDxkaXYgY2xhc3M9InJvdyI+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgZWRpdGFibGU9KG5vdC1lcSBtb2RlICJ2aWV3IikKICAgICAgICAgdmFsdWU9KGlmIHZjbkNyZWF0aW9uTW9kZSAodCAiZ2VuZXJpYy5lbmFibGVkIikgKHQgImdlbmVyaWMuZGlzYWJsZWQiKSkKICAgICAgfX0KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJRdWljayIKICAgICAgICAgICAgICBkaXNhYmxlZD0oaWYgbXVsdGlwbGVSZWdpc3RyaWVzIHRydWUgZmFsc2UpCiAgICAgICAgICAgIH19CiAgICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5zdWJuZXRBY2Nlc3NPcHRpb25zLnF1aWNrJ319CiAgICAgICAgPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iRXhpc3RpbmciCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8uc3VibmV0QWNjZXNzT3B0aW9ucy5leGlzdGluZyd9fQogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJyYWRpbyI+CiAgICAgICAgPGxhYmVsPgogICAgICAgICAge3tyYWRpby1idXR0b24KICAgICAgICAgICAgICBzZWxlY3Rpb249dmNuQ3JlYXRpb25Nb2RlCiAgICAgICAgICAgICAgdmFsdWU9IkN1c3RvbSIKICAgICAgICAgICAgICBkaXNhYmxlZD0oaWYgbXVsdGlwbGVSZWdpc3RyaWVzIHRydWUgZmFsc2UpCiAgICAgICAgICAgIH19CiAgICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5zdWJuZXRBY2Nlc3NPcHRpb25zLmN1c3RvbSd9fQogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgoKICAgICAge3sjaWYgKGVxIHZjbkNyZWF0aW9uTW9kZSAiQ3VzdG9tIil9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnN1Ym5ldC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPXNlbGVjdGVkU3VibmV0fX0KICAgICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIGNvbnRlbnQ9c3VibmV0QWNjZXNzQ2hvaWNlcwogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnN1Ym5ldEFjY2VzcwogICAgICAgICAgICAgIH19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uY2lkci5sYWJlbCd9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy52Y25DaWRyfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLmNpZHIucGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcudmNuQ2lkcn19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIHt7L2lmfX0KCiAgICAgIHt7I2lmIChlcSB2Y25DcmVhdGlvbk1vZGUgIkV4aXN0aW5nIil9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy5jb21wYXJ0bWVudE9DSUQnfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcudmNuQ29tcGFydG1lbnRJZH19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lEUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcudmNuQ29tcGFydG1lbnRJZH19CiAgICAgICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+e3t0ICJjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmNvbXBhcnRtZW50T0NJREhlbHAiIH19PC9wPgogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy52Y25OYW1lJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnZjbk5hbWV9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLnZjbk5hbWVQbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy52Y25OYW1lfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMSd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMX19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMVBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmxvYWRCYWxhbmNlclN1Ym5ldE5hbWUxfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMid9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMn19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMlBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmxvYWRCYWxhbmNlclN1Ym5ldE5hbWUyfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgPC9kaXY+CiAgICAgIHt7L2lmfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCAzKSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICAgIHNhdmU9ImxvYWRJbnN0YW5jZUNvbmZpZyIKICAgICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgICAgIHNhdmVEaXNhYmxlZD1jYW5TYXZlVkNOCiAgICAgICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZS5uZXh0IgogICAgICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLm5vZGUubG9hZGluZyIKICAgICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3sjaWYgKGd0ZSBzdGVwIDQpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWluc3RhbmNlVGl0bGUKICAgICAgICAgIGRldGFpbD1pbnN0YW5jZURldGFpbAogICAgICAgICAgc2hvd0V4cGFuZD1mYWxzZQogICAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICB9fQogIDxkaXYgY2xhc3M9InJvdyI+CgoKICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5ub2RlU2hhcGUubGFiZWwnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCA0KSBpc05ldykgdmFsdWU9c2VsZWN0ZWRub2RlU2hhcGV9fQogICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1ub2RlU2hhcGVDaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5ub2RlU2hhcGUKICAgICAgICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLm9zLmxhYmVsJ319PC9sYWJlbD4KICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPWlzTmV3IHZhbHVlPXNlbGVjdGVkSW1hZ2V9fQogICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1pbWFnZUNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5vZGVJbWFnZQogICAgICAgICAgICAgICAgfX0KICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgPC9kaXY+CgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIHB0LTUiPnt7dCAiY2x1c3Rlck5ldy5jaXZvLm5vZGVTU0hLZXkubGFiZWwifX08L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAge3tpbnB1dC10ZXh0LWZpbGUKICAgICAgICBjbGFzc05hbWVzPSJib3giCiAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLm5vZGVQdWJsaWNLZXlDb250ZW50cwogICAgICAgIG11bHRpcGxlPUZhbHNlCiAgICAgICAgY2FuQ2hhbmdlTmFtZT1mYWxzZQogICAgICAgIGFjY2VwdD0idGV4dC9wbGFpbiwucGVtLC5wdWIsLmtleSIKICAgICAgICBtaW5IZWlnaHQ9NDAKICAgICAgICBwbGFjZWhvbGRlcj0iY2x1c3Rlck5ldy5jaXZvLm5vZGVTU0hLZXkucGxhY2Vob2xkZXIiCiAgICAgICAgc2hvdWxkQ2hhbmdlTmFtZT1mYWxzZQogICAgICAgIGNvbmNlYWxWYWx1ZT1mYWxzZQogICAgICB9fQoKICAgIDwvZGl2PgoKCgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgNCkpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgc2F2ZURpc2FibGVkPWNhbkNyZWF0ZUNsdXN0ZXIKICAgICAgICAgIHNhdmU9InNhdmUiCiAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICB7ey9pZn19CiAge3svaWZ9fQogIHt7L2lmfX0KCgogIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KICB7e3RvcC1lcnJvcnMgZXJyb3JzPW90aGVyRXJyb3JzfX0KICB7e3RvcC1lcnJvcnMgZXJyb3JzPWNsdXN0ZXJFcnJvcnN9fQogIHt7L2FjY29yZGlvbi1saXN0fX0KPC9zZWN0aW9uPg==';
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
    'New York 1': 'NYC1',
    'Frankfurt 1': 'FRA1',
    'London 1': 'LON1',
    'Phoenix 1': 'PHX1'
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
          'access': {
            'next': 'Next: Authenticate & Configure Cluster',
            'loading': 'Loading values from Civo',
            'title': 'Civo Account Configuration',
            'detail': 'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
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
          region: "LON1",
          kubernetesVersion: "1.18",
          nodePools: [],
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
      authenticateOCI(cb) {
        setProperties(this, {
          'errors': null,
          'cluster.civoEngineConfig.apiKey': (get(this, 'cluster.civoEngineConfig.secretKey') || '').trim()
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
    canAuthenticate: computed('cluster.civoEngineConfig.apiKey', function () {
      return get(this, 'cluster.civoEngineConfig.apiKey') ? false : true;
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
