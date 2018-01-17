/*
 * ProfilePage
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
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FolderIcon from 'material-ui-icons/Folder';
import ImageIcon from 'material-ui-icons/Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '10%',
    marginRight: '10%',
  },
  paper: {
    padding: 10,
    borderBottom : "1px solid #E6ECF0",
    color: theme.palette.text.secondary,
  },
  postInputPaper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor : "#F5F8FA",
    borderBottom : "1px solid #E6ECF0",
  },
  postGrid : {
    borderBottom : "1px solid #E6ECF0",
  },
  postpaper: {
    padding: 10,
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
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  rootList: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  followingPaper: {
    marginTop: 10
  }
});
export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <title>Profile Page</title>
          <meta name="description" content="A React.js Boilerplate application ProfilePage" />
        </Helmet>
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={6} sm={3}>
              <Grid className={classes.portfolio} item xs={12} sm={12}>
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
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={0}>
                <Typography type="headline" component="h3">
                  Posts
                </Typography>
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
                Who to Follow
                <List className={classes.rootList}>
                  <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://material-ui-next.com/static/images/remy.jpg" className={classes.avatar} />
                    <ListItemText primary="Demo User" secondary="@demoUser" />
                  </ListItem>
                  <Divider inset />
                  <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://material-ui-next.com/static/images/remy.jpg" className={classes.avatar} />
                    <ListItemText primary="Demo User" secondary="@demoUser" />
                  </ListItem>
                </List>
              </Paper>
              <Paper className={classNames(classes.paper, classes.followingPaper)}>
                Followers List for User Lizard
                <List className={classes.rootList}>
                  <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://material-ui-next.com/static/images/remy.jpg" className={classes.avatar} />
                    <ListItemText primary="Demo User" secondary="@demoUser" />
                  </ListItem>
                  <Divider inset />
                  <ListItem button>
                    <Avatar alt="Remy Sharp" src="https://material-ui-next.com/static/images/remy.jpg" className={classes.avatar} />
                    <ListItemText primary="Demo User" secondary="@demoUser" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </article>
    );
  }
}

ProfilePage.propTypes = {
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
)(ProfilePage);
