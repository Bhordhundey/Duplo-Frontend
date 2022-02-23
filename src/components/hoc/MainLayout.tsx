import { LinearProgress } from '@material-ui/core';
import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import { Search } from '../../pages/Search/Search';
import ScrollToTop from '../ui/ScrollToTop';

interface MainLayoutProps {}
const MainLayout: FC<MainLayoutProps> = () => {


  return (
    <>
      <ScrollToTop>
        <Suspense
          fallback={
            <div>
              <LinearProgress />
            </div>
          }
        >
          <Switch>
          <Route path={'/'} exact render={() => <Search />} />
            <Route path={'/:id'} exact render={() => <Home />} />
          </Switch>
        </Suspense>
      </ScrollToTop>

    </>
  );
};
export default MainLayout;
