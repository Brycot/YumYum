import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    AboutPage,
    DetailPage,
    HomePage,
    LandingPage,
    NotFound,
} from '../pages';

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
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/recipes/:recipeId">
                    <DetailPage />
                </Route>
                <Route path="/*">
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
};
