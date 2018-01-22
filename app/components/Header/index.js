import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';



import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    width: '100%',
    'backface-visibility': 'hidden',
    'border-bottom': '1px solid rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    'z-index': 1000,
    'background-color' : '#2C98F0',
    display : 'flex',
    'justify-content' : 'flex-start'
  },
  heading: {
    'marginLeft' : 10,
    fontWeight : 'bold',
    cursor : 'pointer',
    color : 'white',
    '&:hover' : {
      color : '#E6ECF0'
    }
  },
  subheading : {
    marginLeft : 10,
    color : 'white',
    marginTop : 4,
    cursor : 'pointer',
    '&:hover' : {
      color : '#E6ECF0'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  IconButton : {
    'marginLeft': '76%',
  },
  userAvatar : {
    width : 30,
    height : 30
  }
};

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            {!auth && (
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              )
            }
            <Link to="/">
              <Typography type="headline" color="inherit" className={classes.heading}>
                AussieAlpha
              </Typography>
            </Link>
            <Link to="/stream">
              <Typography type="subheading" color="inherit" className={classes.subheading}>
                Stream
              </Typography>
            </Link>
            <Link to="/portfolio">
              <Typography type="subheading" color="inherit" className={classes.subheading}>
                Portfolio
              </Typography>
            </Link>
            {auth && (
              <div className={classes.IconButton}>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle className={classes.userAvatar}/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <Link to="/profile">
                    <MenuItem onClick={this.handleClose}>
                      Profile
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
