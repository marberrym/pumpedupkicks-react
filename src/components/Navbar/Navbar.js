import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar color='primary'>
        <Toolbar color='primary'>
          <img src='./assets/pumpedupkicks.png' className='logo' />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
