// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from  "./App"
import CardAbout from './Components/Card-About/CardAbout.jsx';
import Project from './Pages/Projects/Project';
import Contact from "./Pages/ContactMe/Contact.jsx"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About Me" exact component={CardAbout} />
        <Route path="/My Projects" exact component={Project} />
        <Route path="/Contact Me" exact component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
