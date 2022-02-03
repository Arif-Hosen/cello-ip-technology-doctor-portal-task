import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { handleEmail, handlePassword, loginUser } = useAuth();

    return (
        <div>
            <Navigation></Navigation>
            <div style={{ width: '400px' }} className='mx-auto mt-5 p-3 bg-warning rounded'>
                <h3 className='mt-3'>LogIn</h3>
                <form onSubmit={loginUser}>

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
                <p>--------------------------------</p>
                <p>New User? Please <Link to='/register'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;