import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <img width='100%' src="https://as1.ftcdn.net/v2/jpg/01/42/65/16/1000_F_142651605_6KI3vTQxcajZuqlgqRynVal35WZQ5eD2.jpg" alt="" />
        </div>
    );
};

export default Home;