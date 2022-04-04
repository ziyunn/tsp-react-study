import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { GlobalTheme } from 'remember-ui';

import { ConfirmModalProvider } from 'context/ConfirmModalContext';
import GlobalConfirmModal from 'components/GlobalConfirmModal/GlobalConfirmModal';
import GlobalHelmet from 'components/GlobalHelmet/GlobalHelmet';
import Routes from 'routers/routes';
import CommonRoute from 'routers/CommonRoute';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Home from 'pages/Home/Home.jsx';
import ModelView from "./pages/ModelView/ModelView";
import 'assets/scss/common.scss';


import { AppBody } from './App.styles';

const BASE_URL = '/react-template-TODO';

function App() {
  const { root, modelView } = Routes;

  return (
    <ConfirmModalProvider>
      <GlobalHelmet />
      <BrowserRouter basename={BASE_URL}>
        <AppBody>
          <GlobalTheme />
          <Switch>
            <CommonRoute path={modelView.path}>
              <Header/>
              <ModelView />
              <Footer/>
            </CommonRoute>
            <CommonRoute path={root.path}>
              <Header/>
              <Home />
              <Footer/>
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
