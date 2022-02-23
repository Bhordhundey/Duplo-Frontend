import React from "react";

import clsx from 'clsx'
import ListShimmerStyles from "./ListShimmerStyles";
import { Skeleton } from "@material-ui/lab";
import { Space } from "../Space/Space";

export interface ListShimmerProps {
  
}

const UserInfoShimmer: React.FC<ListShimmerProps> = ({  }) => {
    const classes = ListShimmerStyles()
    return (
        <div >
       <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
       <Skeleton animation="wave" height={15} width="80%" />
       <Space bottom={20}/>
    </div>
    )
}
export default UserInfoShimmer