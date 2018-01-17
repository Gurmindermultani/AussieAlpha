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
import PostInput from 'components/PostInput';
import PostCard from 'components/PostCard';
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
    marginTop: 75,
    marginBottom: 75,
    marginLeft: '10%',
    marginRight: '10%',
  },
  paper: {
    padding: 10,
    color: theme.palette.text.secondary,
  },
  postInputPaper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor : "#E9F5FD",
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
              <Grid className={classes.portfolio} item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  Tickers
                  <img src={require('./portfolio.png')} />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} className={classes.postInputPaper}>
                <PostInput />
              </Paper>
              <PostCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classNames(classes.paper, classes.overflow)}>
                Article Trends For You
                <List className={classes.rootList}>
                  <ListItem button>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                    <ListItemText primary="Article on Work" secondary="Jan 28, 2014" />
                  </ListItem>
                  <Divider inset />
                  <ListItem button>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <ListItemText primary="Article on Vacation" secondary="Jan 20, 2014" />
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
