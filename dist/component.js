"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmFwaUtleS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iYXBpS2V5IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uYXBpS2V5LnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmFwaUtleX19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgogIDxkaXYgY2xhc3M9InJvdyI+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIHB0LTUiPnt7dCAiY2x1c3Rlck5ldy5jaXZvLnNlY3JldEtleS5sYWJlbCJ9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICA8L2Rpdj4KICAgIHt7aW5wdXQtdGV4dC1maWxlCiAgICAgICAgY2xhc3NOYW1lcz0iYm94IgogICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5wcml2YXRlS2V5Q29udGVudHMKICAgICAgICBtdWx0aXBsZT1GYWxzZQogICAgICAgIGNhbkNoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBhY2NlcHQ9InRleHQvcGxhaW4sLnBlbSwucGtleSwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3LmNpdm8uc2VjcmV0S2V5LnBsYWNlaG9sZGVyIgogICAgICAgIHNob3VsZENoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBjb25jZWFsVmFsdWU9dHJ1ZQogICAgICB9fQoKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCgogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCAxKSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgc2F2ZT0iYXV0aGVudGljYXRlT0NJIgogICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIHNhdmVEaXNhYmxlZD1jYW5BdXRoZW50aWNhdGUKICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmFjY2Vzcy5uZXh0IgogICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8uYWNjZXNzLmxvYWRpbmciCiAgICB9fQogIHt7L2lmfX0KCiAge3sjaWYgKGFuZCAoZ3RlIHN0ZXAgMikgKGVxIG1vZGUgJ2VkaXQnKSl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnZlcnNpb24ubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPXNlbGVjdGVkazhzVmVyc2lvbn19CiAgICAgIHt7bmV3LXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PWs4c1VwZ3JhZGVWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnF1YW50aXR5UGVyU3VibmV0LmxhYmVsJ319PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0ob3IgKGVxIG1vZGUgIm5ldyIpIGVxIG1vZGUgImVkaXRpbmciKSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXR9fQogICAgICB7e2lucHV0LWludGVnZXIgbWluPTEgbWF4PW1heE5vZGVDb3VudCB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXQgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLnF1YW50aXR5UGVyU3VibmV0LnBsYWNlaG9sZGVyJyl9fQogICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+CiAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQuaGVscCd9fQogICAgICA8L3A+CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCiAge3shLS0gZXhpdCBwb2ludCBmb3IgdXBkYXRlL3VwZ3JhZGUgLS19fQogIHt7I2lmIHJlZnJlc2h9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICAgIHNhdmU9InVwZ3JhZGVDbHVzdGVyIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogIHt7L2lmfX0KCiAge3tlbHNlfX0KICB7eyNpZiAoZ3RlIHN0ZXAgMil9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgogIDxkaXYgY2xhc3M9InJvdyI+CiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02IG1iLTAiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8udmVyc2lvbi5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9c2VsZWN0ZWRrOHNWZXJzaW9ufX0KICAgICAge3tuZXctc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9azhzVmVyc2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLmt1YmVybmV0ZXNWZXJzaW9uCiAgICAgICAgICAgICAgfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02IG1iLTAiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMikgaXNOZXcpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldH19CiAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSBtYXg9bWF4Tm9kZUNvdW50IHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQucGxhY2Vob2xkZXInKX19CiAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj4KICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5oZWxwJ319CiAgICAgIDwvcD4KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDIpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0ibG9hZE5vZGVDb25maWciCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmNsdXN0ZXIubmV4dCIKICAgICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyLmxvYWRpbmciCiAgICAgICAgfX0KICB7ey9pZn19CiAge3svaWZ9fQogIHt7I2lmIChndGUgc3RlcCAzKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT12aXJ0dWFsQ2xvdWROZXR3b3JrVGl0bGUKICAgICAgICAgIGRldGFpbD12aXJ0dWFsQ2xvdWROZXR3b3JrRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgoKICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgIGVkaXRhYmxlPShub3QtZXEgbW9kZSAidmlldyIpCiAgICAgICAgIHZhbHVlPShpZiB2Y25DcmVhdGlvbk1vZGUgKHQgImdlbmVyaWMuZW5hYmxlZCIpICh0ICJnZW5lcmljLmRpc2FibGVkIikpCiAgICAgIH19CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iUXVpY2siCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8uc3VibmV0QWNjZXNzT3B0aW9ucy5xdWljayd9fQogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJyYWRpbyI+CiAgICAgICAgPGxhYmVsPgogICAgICAgICAge3tyYWRpby1idXR0b24KICAgICAgICAgICAgICBzZWxlY3Rpb249dmNuQ3JlYXRpb25Nb2RlCiAgICAgICAgICAgICAgdmFsdWU9IkV4aXN0aW5nIgogICAgICAgICAgICAgIGRpc2FibGVkPShpZiBtdWx0aXBsZVJlZ2lzdHJpZXMgdHJ1ZSBmYWxzZSkKICAgICAgICAgICAgfX0KICAgICAgICAgIHt7dCAnY2x1c3Rlck5ldy5jaXZvLnN1Ym5ldEFjY2Vzc09wdGlvbnMuZXhpc3RpbmcnfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJDdXN0b20iCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8uc3VibmV0QWNjZXNzT3B0aW9ucy5jdXN0b20nfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KCiAgICAgIHt7I2lmIChlcSB2Y25DcmVhdGlvbk1vZGUgIkN1c3RvbSIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5zdWJuZXQubGFiZWwnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZFN1Ym5ldH19CiAgICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PXN1Ym5ldEFjY2Vzc0Nob2ljZXMKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5zdWJuZXRBY2Nlc3MKICAgICAgICAgICAgICB9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmNpZHIubGFiZWwnfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcudmNuQ2lkcn19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5jaWRyLnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnZjbkNpZHJ9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICB7ey9pZn19CgogICAgICB7eyNpZiAoZXEgdmNuQ3JlYXRpb25Nb2RlICJFeGlzdGluZyIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lEJ319PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnZjbkNvbXBhcnRtZW50SWR9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmNvbXBhcnRtZW50T0NJRFBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5jaXZvRW5naW5lQ29uZmlnLnZjbkNvbXBhcnRtZW50SWR9fQogICAgICAgICAgPHAgY2xhc3M9ImhlbHAtYmxvY2siPnt7dCAiY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy5jb21wYXJ0bWVudE9DSURIZWxwIiB9fTwvcD4KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMudmNuTmFtZSd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy52Y25OYW1lfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy52Y25OYW1lUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcudmNuTmFtZX19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTEnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTF9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTFQbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMX19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTInfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTJ9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTJQbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMn19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgIDwvZGl2PgogICAgICB7ey9pZn19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgMykpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgICBzYXZlPSJsb2FkSW5zdGFuY2VDb25maWciCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgICAgICBzYXZlRGlzYWJsZWQ9Y2FuU2F2ZVZDTgogICAgICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLm5vZGUubmV4dCIKICAgICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlLmxvYWRpbmciCiAgICAgICAgfX0KICB7ey9pZn19CiAge3svaWZ9fQogIHt7I2lmIChndGUgc3RlcCA0KX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1pbnN0YW5jZVRpdGxlCiAgICAgICAgICBkZXRhaWw9aW5zdGFuY2VEZXRhaWwKICAgICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KICA8ZGl2IGNsYXNzPSJyb3ciPgoKCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ubm9kZVNoYXBlLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgNCkgaXNOZXcpIHZhbHVlPXNlbGVjdGVkbm9kZVNoYXBlfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9bm9kZVNoYXBlQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmNpdm9FbmdpbmVDb25maWcubm9kZVNoYXBlCiAgICAgICAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5vcy5sYWJlbCd9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT1pc05ldyB2YWx1ZT1zZWxlY3RlZEltYWdlfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9aW1hZ2VDaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5ub2RlSW1hZ2UKICAgICAgICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgoKICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9InJvdyI+CgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCBwdC01Ij57e3QgImNsdXN0ZXJOZXcuY2l2by5ub2RlU1NIS2V5LmxhYmVsIn19PC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIHt7aW5wdXQtdGV4dC1maWxlCiAgICAgICAgY2xhc3NOYW1lcz0iYm94IgogICAgICAgIHZhbHVlPWNsdXN0ZXIuY2l2b0VuZ2luZUNvbmZpZy5ub2RlUHVibGljS2V5Q29udGVudHMKICAgICAgICBtdWx0aXBsZT1GYWxzZQogICAgICAgIGNhbkNoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBhY2NlcHQ9InRleHQvcGxhaW4sLnBlbSwucHViLC5rZXkiCiAgICAgICAgbWluSGVpZ2h0PTQwCiAgICAgICAgcGxhY2Vob2xkZXI9ImNsdXN0ZXJOZXcuY2l2by5ub2RlU1NIS2V5LnBsYWNlaG9sZGVyIgogICAgICAgIHNob3VsZENoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBjb25jZWFsVmFsdWU9ZmFsc2UKICAgICAgfX0KCiAgICA8L2Rpdj4KCgoKICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDQpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgIHNhdmVEaXNhYmxlZD1jYW5DcmVhdGVDbHVzdGVyCiAgICAgICAgICBzYXZlPSJzYXZlIgogICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgIH19CiAge3svaWZ9fQogIHt7L2lmfX0KICB7ey9pZn19CgoKICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAge3t0b3AtZXJyb3JzIGVycm9ycz1vdGhlckVycm9yc319CiAge3t0b3AtZXJyb3JzIGVycm9ycz1jbHVzdGVyRXJyb3JzfX0KICB7ey9hY2NvcmRpb24tbGlzdH19Cjwvc2VjdGlvbj4=';
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
            'loading': 'Loading values from Oracle Cloud Infrastructure',
            'title': 'OCI Account Configuration',
            'detail': 'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
          },
          'apiKey': {
            'next': 'Proceed to Cluster Configuration',
            'loading': 'Verifying your API key',
            'title': 'Civo API Key',
            "required": "API key is required",
            "placeholder": "The API key to use for accessing your Civo account",
            'description': 'Provide us with the API key that will be used to access your Civo account'
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
