/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 100,
    marginRight: 100,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  postInputPaper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor : "#F5F8FA",
    borderBottom : "1px solid #E6ECF0",
  },
  postGrid : {
    borderBottom : "1px solid #E6ECF0",
  },
  postpaper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  portfolio : {
    marginTop : 15
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  overflow : {
    overflow: 'hidden'
  }
});
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    const { classes } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={6} sm={3}>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography type="headline" component="h2">
                      Lizard
                    </Typography>
                    <Typography component="p">
                      Summary About User
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.portfolio} item xs={12}>
                <Paper className={classes.paper}>
                  <Typography component="p">
                      Portfolio Summary
                    </Typography>
                  <img src={require('./portfolio.png')} />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} className={classes.postInputPaper}>
                <TextField
                  id="full-width"
                  label="Hello Lizard, Welcome to AussieAlpha"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="What's on your mind?"
                  fullWidth
                  margin="normal"
                />
              </Paper>
              <Paper elevation={0} className={classes.postpaper}>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://material-ui-next.com/static/images/uxceo-128.jpg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Here the post of Users Will Come and the users can comment and Like.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/892295415500025856/y9E8PvLe_400x400.jpg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_400x400.jpg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/925700796598984704/HC-eUKQz_400x400.jpg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/546011298627334146/MAeF2-yK_400x400.jpeg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/426420605945004032/K85ZWV2F_400x400.png"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
                <Grid className={classes.postGrid} container spacing={24}>
                  <Grid item xs={3}>
                    <Avatar
                      alt="Adelle Charles"
                      src="https://pbs.twimg.com/profile_images/875453682170576896/KDcOPtgI_400x400.jpg"
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    Demo Comment.
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classNames(classes.paper, classes.overflow)}>
                <img src={require('./market.png')} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(HomePage);
