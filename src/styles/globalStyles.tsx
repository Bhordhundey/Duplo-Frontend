import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const globalStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    avatarLarge: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    
  }),
);