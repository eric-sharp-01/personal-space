import React from 'react';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Login from './components/Login';

const App = (props) => {  
  return <Router>
    <Navbar />
    <div className="main">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </div>
  </Router>;
}

export default App;