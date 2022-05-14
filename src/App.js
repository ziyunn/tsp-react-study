import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalTheme } from 'remember-ui';

import { ConfirmModalProvider } from 'context/ConfirmModalContext';
import GlobalConfirmModal from 'components/GlobalConfirmModal/GlobalConfirmModal';
import GlobalHelmet from 'components/GlobalHelmet/GlobalHelmet';
import CommonRoute from 'routers/CommonRoute';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Home from 'pages/Home/Home.jsx';
import About from 'pages/About/About.jsx';
import ModelView from "./pages/ModelView/ModelView";
import ModelList from "./pages/ModelList/ModelListTaewan.jsx";
import 'assets/scss/common.scss';


import { AppBody } from './App.styles';

function App() {
  return (
    <ConfirmModalProvider>
      <GlobalHelmet />
      <BrowserRouter>
        <AppBody>
          <GlobalTheme />
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modelView/:page" element={<ModelView />} />
            <Route path="/modelList/:category" element={<ModelList />} />
          </Routes>
          <Footer/>
        </AppBody>
        <GlobalConfirmModal />
      </BrowserRouter>
    </ConfirmModalProvider>
  );
}

export default App;
