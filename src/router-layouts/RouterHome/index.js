import React from 'react';
import { Route } from 'react-router-dom'
import HomeLayout from '../../layouts/Home';

const RouteLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <HomeLayout>
                <Component {...matchProps} />
            </HomeLayout>
        )} />
    )
};

export default RouteLayout;
