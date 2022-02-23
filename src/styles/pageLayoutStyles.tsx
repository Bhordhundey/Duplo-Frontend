import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { appPadding } from '../constants/appConstants';
const pageLayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageCardRoot: {
     marginTop: 20,
      borderRadius: '8px',
      padding:appPadding,
      backgroundColor: theme.palette.primary.contrastText,
      marginBottom:40,
      paddingTop: 30,
      paddingBottom: 120,
      [theme.breakpoints.down("xs")]: {
        paddingBottom: 40,
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
      },
    },
    
  })
);
export default pageLayoutStyles;
