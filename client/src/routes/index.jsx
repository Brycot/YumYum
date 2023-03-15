import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DetailPage, HomePage, LandingPage } from '../pages';

export const AppRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/landing">
                    <LandingPage />
                </Route>
                <Route path="/recipes/:recipeId">
                    <DetailPage />
                </Route>
            </Switch>
        </>
    );
};
