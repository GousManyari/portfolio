import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import About from './about';

const Main = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
    </Switch>
)
export default Main;