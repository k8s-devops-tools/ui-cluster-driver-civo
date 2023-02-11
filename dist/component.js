"use strict";

define("shared/components/cluster-driver/driver-civo/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by50ZW5hbmN5T0NJRC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnRlbmFuY3lJZH19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0idGVuYW5jeSIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLnRlbmFuY3lPQ0lELnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudGVuYW5jeUlkfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiBtYi0wIj4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLmNvbXBhcnRtZW50T0NJRC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmNvbXBhcnRtZW50SWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9ImNvbXBhcnRtZW50IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uY29tcGFydG1lbnRPQ0lELnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcuY29tcGFydG1lbnRJZH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5yZWdpb24ubGFiZWwnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShlcSBtb2RlICJuZXciKSB2YWx1ZT1zZWxlY3RlZFJlZ2lvbn19CiAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9cmVnaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucmVnaW9uCiAgICAgICAgfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9InJvdyI+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by51c2VyT2NpZC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudXNlck9jaWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9InVzZXJuYW1lIiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8udXNlck9jaWQucGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy51c2VyT2NpZH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by51c2VyRmluZ2VycHJpbnQubGFiZWwnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmZpbmdlcnByaW50fX0KICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJmaW5nZXJwcmludCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLnVzZXJGaW5nZXJwcmludC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmZpbmdlcnByaW50fX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnNlY3JldEtleVBhc3NwaHJhc2UubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnByaXZhdGVLZXlQYXNzcGhyYXNlfX0KICAgICAge3tpbnB1dCB0eXBlPSJwYXNzd29yZCIgbmFtZT0icGFzc3dvcmQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgY29uY2VhbFZhbHVlPXRydWUgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5zZWNyZXRLZXlQYXNzcGhyYXNlLnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucHJpdmF0ZUtleVBhc3NwaHJhc2V9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCBwdC01Ij57e3QgImNsdXN0ZXJOZXcuY2l2by5zZWNyZXRLZXkubGFiZWwifX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgPC9kaXY+CiAgICB7e2lucHV0LXRleHQtZmlsZQogICAgICAgIGNsYXNzTmFtZXM9ImJveCIKICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5wcml2YXRlS2V5Q29udGVudHMKICAgICAgICBtdWx0aXBsZT1GYWxzZQogICAgICAgIGNhbkNoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBhY2NlcHQ9InRleHQvcGxhaW4sLnBlbSwucGtleSwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3LmNpdm8uc2VjcmV0S2V5LnBsYWNlaG9sZGVyIgogICAgICAgIHNob3VsZENoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBjb25jZWFsVmFsdWU9dHJ1ZQogICAgICB9fQoKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCgogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCAxKSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgc2F2ZT0iYXV0aGVudGljYXRlT0NJIgogICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIHNhdmVEaXNhYmxlZD1jYW5BdXRoZW50aWNhdGUKICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmFjY2Vzcy5uZXh0IgogICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8uYWNjZXNzLmxvYWRpbmciCiAgICB9fQogIHt7L2lmfX0KCiAge3sjaWYgKGFuZCAoZ3RlIHN0ZXAgMikgKGVxIG1vZGUgJ2VkaXQnKSl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLnZlcnNpb24ubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPXNlbGVjdGVkazhzVmVyc2lvbn19CiAgICAgIHt7bmV3LXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PWs4c1VwZ3JhZGVWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0fX0KICAgICAge3tpbnB1dC1pbnRlZ2VyIG1pbj0xIG1heD1tYXhOb2RlQ291bnQgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXQgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLnF1YW50aXR5UGVyU3VibmV0LnBsYWNlaG9sZGVyJyl9fQogICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+CiAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQuaGVscCd9fQogICAgICA8L3A+CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCiAge3shLS0gZXhpdCBwb2ludCBmb3IgdXBkYXRlL3VwZ3JhZGUgLS19fQogIHt7I2lmIHJlZnJlc2h9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICAgIHNhdmU9InVwZ3JhZGVDbHVzdGVyIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogIHt7L2lmfX0KCiAge3tlbHNlfX0KICB7eyNpZiAoZ3RlIHN0ZXAgMil9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgogIDxkaXYgY2xhc3M9InJvdyI+CiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02IG1iLTAiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8udmVyc2lvbi5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9c2VsZWN0ZWRrOHNWZXJzaW9ufX0KICAgICAge3tuZXctc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9azhzVmVyc2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcua3ViZXJuZXRlc1ZlcnNpb24KICAgICAgICAgICAgICB9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXR9fQogICAgICB7e2lucHV0LWludGVnZXIgbWluPTEgbWF4PW1heE5vZGVDb3VudCB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8ucXVhbnRpdHlQZXJTdWJuZXQucGxhY2Vob2xkZXInKX19CiAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj4KICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcuY2l2by5xdWFudGl0eVBlclN1Ym5ldC5oZWxwJ319CiAgICAgIDwvcD4KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDIpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0ibG9hZE5vZGVDb25maWciCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5jaXZvLmNsdXN0ZXIubmV4dCIKICAgICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5jbHVzdGVyLmxvYWRpbmciCiAgICAgICAgfX0KICB7ey9pZn19CiAge3svaWZ9fQogIHt7I2lmIChndGUgc3RlcCAzKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT12aXJ0dWFsQ2xvdWROZXR3b3JrVGl0bGUKICAgICAgICAgIGRldGFpbD12aXJ0dWFsQ2xvdWROZXR3b3JrRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgoKICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgIGVkaXRhYmxlPShub3QtZXEgbW9kZSAidmlldyIpCiAgICAgICAgIHZhbHVlPShpZiB2Y25DcmVhdGlvbk1vZGUgKHQgImdlbmVyaWMuZW5hYmxlZCIpICh0ICJnZW5lcmljLmRpc2FibGVkIikpCiAgICAgIH19CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iUXVpY2siCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8uc3VibmV0QWNjZXNzT3B0aW9ucy5xdWljayd9fQogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJyYWRpbyI+CiAgICAgICAgPGxhYmVsPgogICAgICAgICAge3tyYWRpby1idXR0b24KICAgICAgICAgICAgICBzZWxlY3Rpb249dmNuQ3JlYXRpb25Nb2RlCiAgICAgICAgICAgICAgdmFsdWU9IkV4aXN0aW5nIgogICAgICAgICAgICAgIGRpc2FibGVkPShpZiBtdWx0aXBsZVJlZ2lzdHJpZXMgdHJ1ZSBmYWxzZSkKICAgICAgICAgICAgfX0KICAgICAgICAgIHt7dCAnY2x1c3Rlck5ldy5jaXZvLnN1Ym5ldEFjY2Vzc09wdGlvbnMuZXhpc3RpbmcnfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJDdXN0b20iCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3LmNpdm8uc3VibmV0QWNjZXNzT3B0aW9ucy5jdXN0b20nfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KCiAgICAgIHt7I2lmIChlcSB2Y25DcmVhdGlvbk1vZGUgIkN1c3RvbSIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5zdWJuZXQubGFiZWwnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZFN1Ym5ldH19CiAgICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBjb250ZW50PXN1Ym5ldEFjY2Vzc0Nob2ljZXMKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnN1Ym5ldEFjY2VzcwogICAgICAgICAgICAgIH19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uY2lkci5sYWJlbCd9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbkNpZHJ9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3LmNpdm8uY2lkci5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbkNpZHJ9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICB7ey9pZn19CgogICAgICB7eyNpZiAoZXEgdmNuQ3JlYXRpb25Nb2RlICJFeGlzdGluZyIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lEJ319PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudmNuQ29tcGFydG1lbnRJZH19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lEUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25Db21wYXJ0bWVudElkfX0KICAgICAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj57e3QgImNsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lESGVscCIgfX08L3A+CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLnZjbk5hbWUnfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25OYW1lfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy52Y25OYW1lUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25OYW1lfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMSd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmxvYWRCYWxhbmNlclN1Ym5ldE5hbWUxfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5jaXZvLmV4aXN0aW5nVkNORGV0YWlscy5sYlN1Ym5ldE5hbWUxUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMX19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3LmNpdm8uZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTInfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMn19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcuY2l2by5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMlBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTJ9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICA8L2Rpdj4KICAgICAge3svaWZ9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDMpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0ibG9hZEluc3RhbmNlQ29uZmlnIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICAgICAgc2F2ZURpc2FibGVkPWNhblNhdmVWQ04KICAgICAgICAgICAgY3JlYXRlTGFiZWw9ImNsdXN0ZXJOZXcuY2l2by5ub2RlLm5leHQiCiAgICAgICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3LmNpdm8ubm9kZS5sb2FkaW5nIgogICAgICAgIH19CiAge3svaWZ9fQogIHt7L2lmfX0KICB7eyNpZiAoZ3RlIHN0ZXAgNCl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9aW5zdGFuY2VUaXRsZQogICAgICAgICAgZGV0YWlsPWluc3RhbmNlRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgPGRpdiBjbGFzcz0icm93Ij4KCgogICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5jaXZvLm5vZGVTaGFwZS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDQpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZG5vZGVTaGFwZX19CiAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PW5vZGVTaGFwZUNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubm9kZVNoYXBlCiAgICAgICAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcuY2l2by5vcy5sYWJlbCd9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT1pc05ldyB2YWx1ZT1zZWxlY3RlZEltYWdlfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9aW1hZ2VDaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLm5vZGVJbWFnZQogICAgICAgICAgICAgICAgfX0KICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgPC9kaXY+CgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIHB0LTUiPnt7dCAiY2x1c3Rlck5ldy5jaXZvLm5vZGVTU0hLZXkubGFiZWwifX08L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAge3tpbnB1dC10ZXh0LWZpbGUKICAgICAgICBjbGFzc05hbWVzPSJib3giCiAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubm9kZVB1YmxpY0tleUNvbnRlbnRzCiAgICAgICAgbXVsdGlwbGU9RmFsc2UKICAgICAgICBjYW5DaGFuZ2VOYW1lPWZhbHNlCiAgICAgICAgYWNjZXB0PSJ0ZXh0L3BsYWluLC5wZW0sLnB1Yiwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3LmNpdm8ubm9kZVNTSEtleS5wbGFjZWhvbGRlciIKICAgICAgICBzaG91bGRDaGFuZ2VOYW1lPWZhbHNlCiAgICAgICAgY29uY2VhbFZhbHVlPWZhbHNlCiAgICAgIH19CgogICAgPC9kaXY+CgoKCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCA0KSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICBzYXZlRGlzYWJsZWQ9Y2FuQ3JlYXRlQ2x1c3RlcgogICAgICAgICAgc2F2ZT0ic2F2ZSIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3svaWZ9fQoKCiAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9b3RoZXJFcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9Y2x1c3RlckVycm9yc319CiAge3svYWNjb3JkaW9uLWxpc3R9fQo8L3NlY3Rpb24+';
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
          'access': {
            'next': 'Next: Authenticate & Configure Cluster',
            'loading': 'Loading values from Oracle Cloud Infrastructure',
            'title': 'OCI Account Configuration',
            'detail': 'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
          },
          'secretKey': {
            'label': 'User Private Key',
            'placeholder': 'The private API key contents for the specified OCI user, in PEM format',
            'provided': 'Provided',
            'required': 'User Private API Key is required'
          },
          'secretKeyPassphrase': {
            'label': 'User Private Key Passphrase',
            'placeholder': 'The passphrase (if any) that protects private key file the specified OCI user',
            'provided': 'Provided'
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
          errors.push(intl.t('clusterNew.oke.quantityPerSubnet.required'));
        } else {
          const maxNodeCount = get(this, 'cluster.civoEngineConfig.maxNodeCount');

          if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
            errors.push(intl.t('clusterNew.oke.quantityPerSubnet.error', {
              max: maxNodeCount
            }));
          }
        }

        if (!kubernetesVersion) {
          errors.push(intl.t('clusterNew.oke.version.required'));
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
      return get(this, 'intl').t('clusterNew.oke.access.title');
    }),
    accessDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.access.detail');
    }),
    clusterTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.cluster.title');
    }),
    clusterDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.cluster.detail');
    }),
    virtualCloudNetworkTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.vcn.title');
    }),
    virtualCloudNetworkDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.vcn.detail');
    }),
    instanceTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.instance.title');
    }),
    instanceDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.instance.detail');
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
