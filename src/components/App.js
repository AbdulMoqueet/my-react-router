import React from 'react';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <Posts />
    </div>
  );
}

export default App;
