/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import Stream from 'containers/Stream/Loadable';
import StockPage from 'containers/StockPage/Loadable';
import Portfolio from 'containers/Portfolio/Loadable';
import Settings from 'containers/Settings/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
  padding-top : 80px
`;

export default function App() {
  const loggedIn = true;
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {loggedIn && 
          <Header />
      }
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/stream" component={Stream} />
        <Route path="/stockpage" component={StockPage} />
        <Route path="/settings" component={Settings} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {loggedIn && 
        <Footer />
      }
    </AppWrapper>
  );
}
