import React from 'react';
import './Home.css';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

export default function HomePage() {
    const history = useHistory();
    const { user, signout } = useAuth();
    
    function handleClick() {
        signout();
        history.push('/login')
    }

    return (
        <div>
            <div className="header">
                <span>Hello {user.first_name}{" "}{user.last_name}{" "}</span>
                <button onClick={handleClick}>Sign out</button>
            </div>
            <Link to="/users">Users Page</Link>
        </div>
    );
}