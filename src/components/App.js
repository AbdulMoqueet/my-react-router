import React from 'react';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Posts from './Posts/Posts';
import Gallery from './Gallery/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
