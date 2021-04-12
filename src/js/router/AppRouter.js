import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import PlaylistPage from '../pages/PlaylistPage';
import CreatePlaylistPage from '../pages/CreatePlaylistPage';
// import NotFoundPage from '../pages/NotFoundPage';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/home" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/playlists" component={PlaylistPage} />
            <Route path="/create-playlist" component={CreatePlaylistPage} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;