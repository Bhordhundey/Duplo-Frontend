import { Divider, Grid } from '@material-ui/core';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from 'react';
import repositoryItemStyles from 'styles/repositoryItemStyles';
import { INode } from 'types/user';

export interface RepositoryItemProps {
  item:INode
}
const RepositoryItem = ({item}: RepositoryItemProps) => {
  const classes = repositoryItemStyles();
  dayjs.extend(relativeTime)

  return (
    <div className={classes.itemRoot}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6} xs={12} className="d-flex">
              <p className="name">{item?.name}</p>
              <span>
              <p className="public">{item.isPrivate ? "Private":"Public"}</p>
              </span>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
      <label>{item.description}</label>

      <Grid container>
        <Grid item md={5} xs={12}>
          <Grid container spacing={3} className="details">
            <Grid item>
              <label>HTML</label>
            </Grid>
            <Grid item>
              <label>10</label>
            </Grid>
            <Grid item>
              <label>Updated {dayjs(item?.updatedAt).fromNow()}</label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
};
export default RepositoryItem;
