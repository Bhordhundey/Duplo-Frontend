import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/hoc/MainLayout';
import client from './graphql/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Themes from './theme';
import { disableReactDevTools } from './utils/globalUtils';



disableReactDevTools();
const generateClassName = createGenerateClassName({
  productionPrefix: '--github-ui--'
});


      ReactDOM.render(
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={Themes.default}>
            <ApolloProvider client={client}>
              <BrowserRouter>
                    <MainLayout />
              </BrowserRouter>
            </ApolloProvider>
          </ThemeProvider>
        </StylesProvider>,
        document.getElementById('root')
      );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
