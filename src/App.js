import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './Landing_Page/MainPage';
import Login from './Login/login.html';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
