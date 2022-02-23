declare module 'tinycolor2';
namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      REACT_APP_GRAPHQL_KEY:string;
      REACT_APP_GRAPHQL_API: string;
    }
  }