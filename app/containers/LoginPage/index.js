/*
 * LoginPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const styles = theme => ({
  root : {
    flexGrow: 1,
    marginTop: '7%',
    marginBottom: 16,
    marginLeft: '36%',
    marginRight: '36%',
  },
  paper: theme.mixins.gutters({
    paddingTop: 56,
    paddingBottom: 56,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
    margin: theme.spacing.unit,
    float : 'right'
  },
  clearFloat: {
    clear : 'both',
    marginTop: 100
  },
  signIn: {
    marginTop : 10
  },
  firstTextField : {
    marginTop : 70
  },
});


class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    gapi.signin2.render('googleSign', {
      'scope': 'profile email',
      'width': 180,
      'height': 40,
      'longtitle': true,
      'theme': 'dark'
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Login page of React.js Boilerplate application" />
        </Helmet>
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={4}>
            <Typography type="headline" component="h3">
              AussieAlpha
            </Typography>
            <Typography className={classes.signIn} component="p">
              Sign In with Email, Google or Facebook.
            </Typography>
            <TextField
              id="full-width"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.firstTextField}
              placeholder="Email"
              fullWidth
              margin="normal"
            />
            <TextField
              id="full-width"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Password"
              fullWidth
              margin="normal"
            />
            <Button raised color="primary" className={classes.button}>
              Next
            </Button>
            <div className={classes.clearFloat}></div>
            <div className={classes.social}>
              <div id="googleSign"></div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);
