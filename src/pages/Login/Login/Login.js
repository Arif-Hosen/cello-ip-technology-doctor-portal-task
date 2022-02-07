import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { handleEmail, handlePassword, loginUser, setIsLoading } = useAuth();
    // to get location where user want to go
    const location = useLocation();
    const history = useHistory();
    const [error, setError] = useState('');

    const redirectUrl = location.state?.from || '/';

    const loginHandler = e => {
        e.preventDefault();
        loginUser()
            // after login redirect to visited page
            .then(result => {
                history.push(redirectUrl);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <Navigation></Navigation>
            <div style={{ width: '400px' }} className='mx-auto mt-5 p-3 bg-warning rounded'>
                <h3 className='mt-3'>LogIn</h3>
                <form onSubmit={loginHandler}>

                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email"
                            onBlur={handleEmail}
                            class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password"
                            onBlur={handlePassword}
                            class="form-control" id="exampleFormControlInput1" placeholder="password" />
                    </div>
                    <button className='btn btn-primary' type="submit"
                    >Login</button>
                </form>
                {
                    error && <p>{error}</p>
                }
                <p>--------------------------------</p>
                <p>New User? Please <Link to='/register'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;