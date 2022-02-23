import React from "react";

import clsx from 'clsx'
import ListShimmerStyles from "./ListShimmerStyles";
import { Skeleton } from "@material-ui/lab";
import { Divider } from "@material-ui/core";
import { Space } from "../Space/Space";

export interface ListShimmerProps {
  
}

const ListShimmer: React.FC<ListShimmerProps> = ({  }) => {
    const classes = ListShimmerStyles()
    return (
        <div className={classes.root}>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
      <Space top={10}/>
      <Divider />
      <Space top={10}/>
      <Skeleton height={30} />
    </div>
    )
}
export default ListShimmer