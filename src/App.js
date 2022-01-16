import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { GlobalTheme } from 'remember-ui';

import { ConfirmModalProvider } from 'context/ConfirmModalContext';
import GlobalConfirmModal from 'components/GlobalConfirmModal/GlobalConfirmModal';
import GlobalHelmet from 'components/GlobalHelmet/GlobalHelmet';
import Routes from 'routers/routes';
import CommonRoute from 'routers/CommonRoute';
import Home from 'pages/Home/Home.jsx';
import ModelList from 'pages/ModelList/ModelList';
import InfiniteScroll from 'pages/InfiniteScroll/InfiniteScroll';

import { AppBody } from './App.styles';

const BASE_URL = '/tsp-home';

function App() {
  const { root, modelList, infiniteScroll } = Routes;

  return (
    <ConfirmModalProvider>
      <GlobalHelmet />
      <BrowserRouter basename={BASE_URL}>
        <AppBody>
          <GlobalTheme />
          <Switch>
            <CommonRoute path={infiniteScroll.path}>
              <InfiniteScroll />
            </CommonRoute>
            <CommonRoute path={modelList.path}>
              <ModelList />
            </CommonRoute>
            <CommonRoute path={root.path}>
              <Home />
            </CommonRoute>
            <Redirect to={root.path} />
          </Switch>
        </AppBody>
        <GlobalConfirmModal />
      </BrowserRouter>
    </ConfirmModalProvider>
  );
}

export default App;
