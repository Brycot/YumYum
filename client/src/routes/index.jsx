import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, LandingPage } from '../pages';

export const AppRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <LandingPage path="/landing" />
                </Route>
            </Switch>
        </>
    );
};
