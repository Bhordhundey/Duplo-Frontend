import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
const repositoryItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemRoot: {
    paddingTop:10,
     marginBottom:10,

     "& label":{
      marginBottom:0,
       color:theme.palette.grey[700]
     },
     "& .name":{
      marginBottom:3,
        color:"#0969da",
        cursor: "pointer",
        fontWeight:600,
        fontSize:21,
        "& :hover":{
          textDecoration:"underline"
        }
     },
     "& .public":{
       marginBottom:4,
       color:"#57606a",
       fontWeight:500,
       border:`1px solid ${theme.palette.grey[500]}`,
       backgroundColor:theme.palette.primary.contrastText,
       borderRadius:50,
       marginLeft:7,
       paddingLeft:10,
       paddingTop:1,
       paddingBottom:1,
       paddingRight:0,
       width:60,
       marginTop:3,
       fontSize:13
     },


     "& .details":{
      marginTop:0,
      fontSize:14
     },

     "& hr":{
      marginTop:20,
      opacity:1,
      backgroundColor:theme.palette.grey[300],
      height:1
    },
    },
    
  })
);
export default repositoryItemStyles;
