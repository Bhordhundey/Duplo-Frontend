import tinycolor from 'tinycolor2';

export const primary = '#24292E';
export const lightPrimary = '#F5F8FA';
export const black = '#000000';
export const lightenRate = 7.5;
const darkenRate = 15;
export const white = '#ffffff';
export default {
  palette: {
    primary: {
      main: primary,
      light: lightPrimary,
      dark: tinycolor(primary).darken(darkenRate).toHexString()
    },
 
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
    
      }
    },
    typography: {
      fontSize: 12,
      '@media (min-width:1680px)': {
        fontSize: 15
      },
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Roboto'].join(',')
    },
    MuiTab: {
      root:{
        padding:0,
        '@media (min-width: 600px)': {
        },
      }
    },
    MuiInput:{
      underline:{
      border:`none`,
      "&:after": {
        borderBottom: `1px solid #BA3AF9 !important`
      },
      "&:hover": {
        border:`none`,
      },
    }
  },
    MuiTabs: {
      
      flexContainer: {
        '@media (min-width: 768px)': {
          justifyContent: 'center'
        },
        '& button':{
          // marginLeft:50
        }
      },
      
    },
  }
};
