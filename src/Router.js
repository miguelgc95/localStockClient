import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './routes';

import Home from './pages/Home';
import Search from './pages/Search';

import SignUpUser from './pages/SignUpUser';
import LoginUser from './pages/LoginUser';
import UserProfile from './pages/UserProfile';

import SignUpBusinessUser from './pages/SignUpBusinessUser';
import LoginBusinessUser from './pages/LoginBusinessUser';
import BusinessProfile from './pages/BusinessProfile';

import ProtectedRoute from './routes/protectedRoutes';

function MainRouter() {
    return (
        <Switch>
            {/*  GENERIC/NON-LOGGED ROUTES */}
            <Route path={ROUTES.HOME} component={Home} exact />
            <ProtectedRoute path={ROUTES.SEARCH} component={Search} exact />

            {/* USER */}
            <Route path={ROUTES.SIGN_UP_USER} component={SignUpUser} exact />
            <Route path={ROUTES.LOGIN_USER} component={LoginUser} exact />
            <ProtectedRoute path={ROUTES.HOME_USER} component={UserProfile} />

            {/* BUSINESS */}
            <Route
                path={ROUTES.SIGN_UP_BUSINESS_USER}
                component={SignUpBusinessUser}
                exact
            />
            <Route
                path={ROUTES.LOGIN_BUSINESS_USER}
                component={LoginBusinessUser}
                exact
            />

            <ProtectedRoute
                path={ROUTES.HOME_BUSINESS_USER}
                component={BusinessProfile}
            />
        </Switch>
    );
}

export default MainRouter;
