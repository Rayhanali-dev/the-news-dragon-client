import React from 'react';
import NavigationPages from '../pages/Shared/NavigationPage/NavigationPages';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationPages></NavigationPages>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;