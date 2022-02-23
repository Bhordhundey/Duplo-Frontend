import { makeStyles, Theme } from '@material-ui/core';

const customInputStyle = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '0px',
    fontSize: 18,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '& fieldset': {
      borderColor: 'hsla(0, 0%, 44%, 0.2)',
      top: '0px !important',

    },
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 400,
  },
  inputErrorContainer: {
    marginTop: '-7px'
  },
  multilineInput: {
    paddingLeft: '15px'
  },
  input: {
    paddingLeft: '8px !important',
    paddingTop: '13px',
    paddingBottom: '13px !important',
     [theme.breakpoints.down('xl')]: {}
  },
  notchedOutline: {
    top: '0px !important'
  },
  formControl: {
    // width:'100%'
  },
  inputerrorIcon: {
    marginTop: -1
  },
  inputContainer: {
    marginBottom: '5px',
    '& fieldset': {
      top: '0px !important',

    },
    '& .MuiFormControl-marginNormal': {
      marginTop: '5px !important'
    }
  },
}));

export default customInputStyle;
