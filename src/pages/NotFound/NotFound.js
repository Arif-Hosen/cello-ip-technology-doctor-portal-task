import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2 className='mt-5'>Sorry!!! Page not found</h2>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=338&ext=jpg" alt="" />
        </div>
    );
};

export default NotFound;