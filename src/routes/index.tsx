import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/HomePage';
import AboutPage from 'containers/AboutPage/AboutPage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
// import YoutubePage from 'containers/YoutubePage/YoutubePage';
import Menu from 'components/Menu/Menu';

import SideDrawer from 'components/SideDrawer/SideDrawer';
import { Page } from './types';
interface RouteState {
  isDrawerOpen: boolean;
}

export const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: false,
    component: AboutPage,
  },
];
// ,
//   {
//     path: '/youtube',
//     exact: false,
//     component: YoutubePage,
//   },
class Routes extends Component<{}, RouteState> {
  state: RouteState = {
    isDrawerOpen: true,
  };

  handleCloseSideDrawer = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  render() {
    const { isDrawerOpen } = this.state;
    return (
      <BrowserRouter>
        <Menu bgColor="dark" />
        <SideDrawer open={isDrawerOpen} onClose={this.handleCloseSideDrawer} />
        <main className="main">
          <Switch>
            {pages.map(({ component, path, exact }) => {
              return <Route key={path} component={component} exact={exact} path={path} />;
            })}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer></footer>
      </BrowserRouter>
    );
  }
}

export default Routes;
