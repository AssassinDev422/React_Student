import React from 'react';
import { Route } from 'react-router-dom';
import AuthenticatedComponent from './components/authenticated-component';
import { ROUTES } from './constants/routes';
import App from './components/landing-page/landing-page';
import Dashboard from './components/dashboard/dashboard';
import UserInfoForm from './components/user-info-form/user-info-form';
import DashboardWithSignup from './components/dashboard-withsignup/dashboard-withsignup';
import FacebookLoginRedirect from './components/auth/facebook-login-redirect/facebook-login-redirect';

export const routes = (
  <div>
    <Route exact path={ ROUTES.ROOT } component={App}/>
    <Route path={ ROUTES.LANDING_PAGE } component={App}/>
    <Route exact path={ ROUTES.DASHBOARD } component={AuthenticatedComponent(Dashboard)}/>
    <Route exact path={ ROUTES.USER_INFO_FORM } component={AuthenticatedComponent(UserInfoForm)}/>
    <Route path={ ROUTES.SIGNUP } component={DashboardWithSignup}/>
    <Route path={ ROUTES.FACEBOOK_LOGIN_REDIRECT } component={FacebookLoginRedirect}/>
  </div>
);
