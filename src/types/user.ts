
export interface INode {
  name: string;
  description: string;
  url: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
  __typename: string;
}

export interface Repositories {
  nodes: INode[];
  __typename: string;
}
export interface Followers {
  totalCount:number;
}
export interface Following {
  totalCount:number;
}
export interface IUser {
  avatarUrl: string;
  name: string;
  twitterUsername:string;
  websiteUrl: string;
  location: string;
  bio: string;
  email: string;
  repositories: Repositories;
  followers:Followers;
  following:Following;
  __typename: string;
}

export interface IUserResponse {
  user: IUser;
}
