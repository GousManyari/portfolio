import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import About from './about';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/resume" component={Resume} />
        <Route path = "/projects" component={Projects} />
        <Route path = "/about" component={About} />
    </Switch>
)
export default Main;
