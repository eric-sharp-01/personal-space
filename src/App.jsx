import React from 'react';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

const App = (props) => {
  return <Router>
    <Navbar />
    <div className="main">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    </div>
  </Router>;
}

export default App;