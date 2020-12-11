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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51Hx5SGFr9rZEOOUfwT9Ll63qb7nRtTKXix9V0eLwH1GpjfZLefn7DjPQqsmQjRmsFfLlcdkWvX5P7a7ekQeXnXLw00yiTtrrj9');

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
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
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
