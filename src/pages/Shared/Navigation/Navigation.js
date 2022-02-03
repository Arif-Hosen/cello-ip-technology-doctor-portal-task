import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOutUser } = useAuth();
    // console.log(user?.email);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className='navbar-brand text-light' to='/home'>Doctor Portal</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link active text-light' to='/addpatient'>Add Patient</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active text-light' to='/patientlist'>Patient List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active text-light' to='/dashboard'>Dashboard</Link>
                            </li>
                        </ul>


                        {user?.email ? <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">

                                <Link className='nav-link active text-light' to='/register'
                                    onClick={logOutUser}><span className='text-dark pe-3 '>{user?.email}</span>Logout</Link>


                            </li>
                        </ul>
                            :
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className='nav-link active text-light' to='/register'>Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link active text-light' to='/login'>Login</Link>
                                </li>
                            </ul>}



                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;