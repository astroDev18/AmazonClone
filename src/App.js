import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // Will only run once app component loads

        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS =>', authUser);

            if (authUser) {
                // The user has logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // The user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        })
    }, [])

    return (
        <Router>
            <div className="app">
                <Switch>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/checkout">
                        <Header/>
                        <Checkout />
                    </Route>

                    <Route path="/payment">
                        <Header/>
                        <Payment />
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
