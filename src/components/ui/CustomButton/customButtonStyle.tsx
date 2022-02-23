import { makeStyles, Theme } from "@material-ui/core";
const customButtonStyle = makeStyles((theme: Theme) => ({
    root: {
        width: '80%',
        padding: theme.spacing(2.2),
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '7px !important',
        fontSize: '15px !important',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            opacity:0.8
        },
    },
    default: {
        backgroundColor: theme.palette.primary.contrastText,
        border: `1.3px solid ${theme.palette.grey[500]} !important`,
        color: theme.palette.primary.main,
        fontWeight: 500,
        fontSize: '15px !important',
        '&:hover': {
            opacity:0.8
        },
    },
    disabled: {
        color: '#000000 !important',
        opacity: 0.8
    },
    disablednormal:{
        // color: 'white !important',
        color: 'white',
        opacity: 0.8
    },
    enabled: {
        backgroundColor: 'linear-gradient(90deg, rgba(67,43,123,1) 24%, rgba(106,75,188,1) 61%, rgba(106,75,188,1) 100%)',
        color: `${theme.palette.primary.contrastText} !important`,
        opacity: 1
    },
    label: {
    }
}))

export default customButtonStyle;