import React from 'react';
import Home from '../Home/Home';
import {CssBaseline } from '@material-ui/core';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from '../Discover/Discover';



function App() {
    
    
    
    return (
        
        <Router> 
        <div>
        <Route path="/" exact component ={Home}/>
        <Route path="/discover" component ={Discover}/>
        
        <CssBaseline />
        </div>
        </Router>
        );
        
    }
    
    export default App;