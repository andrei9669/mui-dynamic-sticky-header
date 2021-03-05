import type { Theme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';

const baseTheme = (): Theme =>
  createMuiTheme({
    palette: {
      primary: { main: '#0737A0', dark: '#0A2D96' },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    typography: {},
    overrides: {
      MuiOutlinedInput: {
        root: {
          borderRadius: 0,
        },
        adornedEnd: {
          paddingRight: 0,
        },
      },
      MuiButtonBase: {
        root: {
          borderRadius: 0,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 0,
        },
      },
      MuiTableCell: {
        root: {
          padding: 4,
          fontSize: '11px',
        },
      },
      MuiSpeedDial: {
        fab: {
          width: '2.1rem',
          height: '2rem',
        },
      },
      MuiSpeedDialAction: {
        fab: {
          width: '2.1rem',
          height: '2rem',
          margin: '5px',
        },
      },
    },
  });
export default baseTheme;
