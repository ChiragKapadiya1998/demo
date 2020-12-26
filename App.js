import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Login } from './page/Login';
import { Signupdeliver } from './page/Signupdeliver';
import { Signupmerchant } from './page/Signupmerchant';
import { Signupuser } from './page/Signupuser';
import { Signup } from './page/Signup';
import { Registration } from './page/Registration';
import { Home } from './page/Home';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => {
    return ( <
        >

        <
        Switch >
        <
        Route exact path = '/'
        component = { Login }
        /> <
        Route exact path = '/Signupdeliver'
        component = { Signupdeliver }
        /> <
        Route exact path = '/Signupmerchant'
        component = { Signupmerchant }
        /> <
        Route exact path = '/Signupuser'
        component = { Signupuser }
        /> <
        Route exact path = '/Signup'
        component = { Signup }
        /> <
        Route exact path = '/Registration'
        component = { Registration }
        /> <
        Route exact path = '/Home'
        component = { Home }
        />

        <
        Redirect to = "/" / >
        <
        /Switch>


        <
        />

    )
}

export default App;