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

import PostInput from 'components/PostInput';
import PostCard from 'components/PostCard';
import Ticker from 'components/Ticker';
import AddBox from 'material-ui-icons/AddBox';
import Launch from 'material-ui-icons/Launch';
import TrendingUp from 'material-ui-icons/TrendingUp';
import IconButton from 'material-ui/IconButton';


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
  userAvatar: {
    height : 25,
    width : 25,
  },
  watchlist : {
    display : 'inline-block',
    fontSize : '1.2em',
    lineHeight : '48px'
  },
  addButton : {
    float : 'right'
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
export class Portfolio extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <meta name="description" content="A React.js Boilerplate application Portfolio" />
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
                      Welcome Lizard to your portfolio Page. here List of followed tickers' posts will come.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PostCard />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Grid className={classes.portfolio} item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <div>
                    <IconButton className={classes.watchlistIcon}>
                      <Launch className={classes.userAvatar}/>
                    </IconButton>
                    <Typography className={classes.watchlist} align="left" type="title">
                      Portfolio
                    </Typography>
                    <IconButton className={classes.addButton}>
                      <AddBox className={classes.userAvatar}/>
                    </IconButton>
                    <div className={classes.clearFloat}></div>
                  </div>
                  <Ticker />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </article>
    );
  }
}

Portfolio.propTypes = {
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
)(Portfolio);
