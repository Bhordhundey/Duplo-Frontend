Hagglex Web Admin Portal
============================

This project was bootstrapped with [Create React App Typescript](https://create-react-app.dev/docs/adding-typescript/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Built With
---

- [React](https://reactjs.org/) - The front-end library used.
- [V4 Material UI](https://v4.mui.com/) - The UI AdHoc library used.
- [create-react-app-typescript](https://create-react-app.dev/docs/adding-typescript/) - The command line utility tool for setting up React project.

Folder Structure 
============================
### A top-level directory layout
    ├── node_modules            # Contains all dependencies
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public                  # index.html and other assets
    ├── src                     # Source files majorly in Typescript
    │   ├── assets              # Other important assets.
            ├── images          # Image assets     
            ├── svg             # Svg assets
    │   ├── components          # all components.
            ├── hoc             # HOC (Higher Order Documents) assets.     
            ├── shared          # Components that are shared.
            ├── ui              # UI Resuable components that are shared.
    │   ├── constants           # appConstants.tsx, routes.tsx,menuitems.tsx
    │   ├── pages               # Pages
    │   ├── styles              # Contains styles for pages and shared components
    │   ├── theme               # Contains default app theme.
    │   ├── types               # Contains all types and interface declarations
    │   ├── utils               # Utility and helper functions,
    │   └── ...                 # etc.
    └── README.md
    └── ...
