import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Routers
import RouterHome from './router-layouts/RouterHome';

//Screens
import Home from "./screens/Home";
import TestTwo from "./screens/TestTwo";
import Contact from './screens/Contact';
import NotFound from './screens/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <RouterHome exact path='/' component={Home}/>
                <RouterHome exact path='/test2' component={TestTwo}/>
                <RouterHome exact path='/contact' component={Contact}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
