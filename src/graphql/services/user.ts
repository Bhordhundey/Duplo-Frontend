import { gql } from '@apollo/client';

export const GET_USER_DETAILS = gql`

query UserDetails($login:String!){
    user(login: $login) {
      avatarUrl
      name
      twitterUsername
      email
      websiteUrl
      location
      bio
      followers{
        totalCount
      }
      following{
        totalCount
      }
      repositories(first: 10, isFork: false) {
        nodes {
          name
          stargazerCount
          description
          url
          isPrivate
          createdAt
          updatedAt
        }
      
    }
  }
}

`;
