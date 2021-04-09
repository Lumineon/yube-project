import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
// import NotFoundPage from '../pages/NotFoundPage';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/home" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;