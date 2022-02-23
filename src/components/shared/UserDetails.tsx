import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import { IUser } from '../../types/user';
import CustomButton from '../ui/CustomButton/CustomButton';
import { Space } from '../ui/Space/Space';
export interface UserDetailsProps {
  user?: IUser;
  userName: string;
}
const UserDetails = ({ user, userName }: UserDetailsProps) => {
  return (
    <div>
      <Space top={20} />
      <CustomButton text="UnFollow" id="action" default height={40} />
      <Space top={20} />
      <p>{user?.bio}</p>

      <div>
        <PeopleOutlineIcon/> <b>{user?.followers.totalCount}</b> Followers .  {user?.following.totalCount} Following
      </div>
      <Space top={20} />
      <div className="mt-2">
        <BusinessIcon /> @{userName}
      </div>

      <div className="mt-2">
        <LocationOnIcon />
        {user?.location}
      </div>
      <div className="mt-2">
        <MailOutlineIcon /> {user?.email}
      </div>

      {user?.websiteUrl && (
        <div className="mt-2">
          <LinkIcon />
          {user?.websiteUrl}
        </div>
      )}

      {user?.twitterUsername && (
        <div className="mt-2">
          <TwitterIcon /> {user?.twitterUsername}
        </div>
      )}
      <Space top={20} />
      <Divider />
    </div>
  );
};
export default UserDetails;
