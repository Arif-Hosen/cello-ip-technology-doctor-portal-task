import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // destructuring user from useAuth
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}

                    >

                    </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;