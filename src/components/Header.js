import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';
import UserProfile from './UserProfile';

const Header = (props) => {
    return (
        <header className="Header"> 
            <Logo />
            <Navigation />
            <Search onSubmit={props.onSubmit} />
            <UserProfile />
        </header>
    )
};

export default Header;