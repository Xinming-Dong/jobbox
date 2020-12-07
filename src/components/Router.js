import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import { createHashHistory } from 'history'
import SigninComponent from './SignInComponent';
import CreateAccountComponent from './CreateAccountComponent';
import JobSeekerComponent from './JobSeekerComponent';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {/*<Route exact path="/src/components/SignInComponent" component={SignInComponent}/>*/}
            <Route path="/JobSeekerComponent" component={JobSeekerComponent}/>
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
        </Switch>
    </HashRouter>
);

export default BasicRoute;
// export const history = createHashHistory();