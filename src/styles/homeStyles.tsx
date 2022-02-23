import { makeStyles } from "@material-ui/core/styles";

const homeStyles = makeStyles((theme) => ({
  authRoot:{

    "& h1":{
      fontSize:20
    },

    "& .userName":{
      color:theme.palette.grey[400]
    }
  }
}));
export default homeStyles;
