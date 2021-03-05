import '@material-ui/core/styles';
import { SpeedDialClassKey } from '@material-ui/lab/SpeedDial';
import { SpeedDialActionClassKey } from '@material-ui/lab/SpeedDialAction';

declare module '@material-ui/core/styles/createMuiTheme' {}

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiSpeedDial: SpeedDialClassKey;
    MuiSpeedDialAction: SpeedDialActionClassKey;
  }
}
