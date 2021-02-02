import React, { useState } from 'react';
import * as loginService from './service';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import LoginForm from './LoginForm';

export default function LoginController() {
    const history = useHistory();
    const { signin } = useAuth();
    const [error, setError] = useState(null);

    function handleLogin(email,password, remember) {
        loginService.login(email,password)
            .then(user => {
                signin(user, remember);
                history.push('/') 
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <>
            <LoginForm onSubmit={handleLogin} />
            {error && "Username and Password not correct"}
        </>
        
    )
}