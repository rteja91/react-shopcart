import React from 'react';


import HeaderNav from '../../containers/Navbar/Navbar';

const Header = (props) => (
    <header >
        <HeaderNav clickviewCart={props.clickviewCart} cartInfo={props.cartInfo} />
    </header>
);

export default Header;