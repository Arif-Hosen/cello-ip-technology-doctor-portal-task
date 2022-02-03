import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {

    const { user, handleEmail, handlePassword, createUserRegistration } = useAuth();
    const history = useHistory();

    // after signup , user will go to home page
    useEffect(() => {
        if (user?.email) {
            history.push('/')
        }
    }, [user])

    return (
        <div>
            <Navigation></Navigation>
            <div style={{ width: '400px' }} className=' mx-auto mt-5 p-3 bg-warning rounded'>
                <h3>Sign Up</h3>
                <form onSubmit={createUserRegistration}>
                    <div class="mb-3 text-start">
                        <label for="exampleFormControlInput1" class="form-label ">Name</label>
                        <input type="text"
                            className="form-control" id="exampleFormControlInput1" placeholder="Patient Name" />
                    </div>
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
                    <button className='btn btn-primary'
                        type="submit">Sign Up</button>
                </form>
                {user.email &&
                    <p className='text-success'>Successfully registered!</p>
                }
                <p>--------------------------------</p>
                <p>Already Sign Up? Please <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;