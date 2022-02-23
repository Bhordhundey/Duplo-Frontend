import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStylesFacebook = makeStyles((theme:Theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    animationDuration: '550ms',
  },
}));

function HagglexCustomCircleLoader(props:any) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        size={18}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomCircleLoader(props:any) {

  return (
      <HagglexCustomCircleLoader style={{
        color:props.color,
      }} />
  );
}
