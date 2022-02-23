import { createTheme ,responsiveFontSizes} from "@material-ui/core/styles";
import defaultTheme from "./default";


let theme = createTheme({ ...defaultTheme, ...defaultTheme.overrides })
export default {
  default: responsiveFontSizes(theme),
};
