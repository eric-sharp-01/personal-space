import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Login from './components/Login';
import bg from './assets/bg-gta5.jpg';


const App = (props) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
  }, [])
  
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