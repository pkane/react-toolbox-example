import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Link from 'react-toolbox/lib/Link';
import Logo from './Logo.js';
import theme from './MainNavBar.css';

const MainNavBar = ({ children, ...other }, props) => (
  <AppBar {...other} theme={theme} leftIcon={<Logo />} >
    <h1>{props.title}</h1>
  </AppBar>
);

export default MainNavBar;
