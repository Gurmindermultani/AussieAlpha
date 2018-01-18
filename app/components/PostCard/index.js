import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import CommentIcon from 'material-ui-icons/ChatBubbleOutline';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { getData } from "./getDataUtil"
import MovingAverage from "components/MovingAverage"


const styles = theme => ({
  card: {
    maxWidth: 1000,
    borderBottom: "1px solid #E6ECF0"
  },
  media: {
    height: 300,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  spaceBetweenIcons : {
    width : 20
  },
  chartContainer : {
    border : "1px solid #E6ECF0",
    margin : 10,
    borderRadius : 4
  }
});

class PostCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  componentDidMount(){
    getData().then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                G
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Moving Average of Stocks"
            subheader="September 14, 2016"
          />
          <div className={classes.chartContainer}>
            {this.state && this.state.data && (
              <MovingAverage data={this.state.data} />
            )}
          </div>
          <CardContent>
            <Typography component="p">
              This is the comparison of moving averages of different stocks that are trending.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Comments Component will come here.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="https://material-ui-next.com/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                  alt="Adelle Charles"
                  src="https://pbs.twimg.com/profile_images/892295415500025856/y9E8PvLe_400x400.jpg"
                  className={classes.avatar}
                />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="British Vogue"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography component="p">
              Dr. King was 26 when the Montgomery bus boycott began. He started small, rallying others who believed their efforts mattered, pressing on through challenges and doubts to change our world for the better. A permanent inspiration for the rest of us to keep pushing towards justice.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                  alt="Adelle Charles"
                  src="https://pbs.twimg.com/profile_images/925700796598984704/HC-eUKQz_400x400.jpg"
                  className={classes.avatar}
                />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Sonam Kapoor"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/media/DTp3xd1UQAAAmwc.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              Happy birthday Nons!🎂 Your bright energy continues to shine, especially today. Hope it's a wonderful day.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                  alt="Adelle Charles"
                  src="https://pbs.twimg.com/profile_images/892295415500025856/y9E8PvLe_400x400.jpg"
                  className={classes.avatar}
                />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography component="p">
              Dr. King was 26 when the Montgomery bus boycott began. He started small, rallying others who believed their efforts mattered, pressing on through challenges and doubts to change our world for the better. A permanent inspiration for the rest of us to keep pushing towards justice.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card elevation={0} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                  alt="Adelle Charles"
                  src="https://pbs.twimg.com/profile_images/892295415500025856/y9E8PvLe_400x400.jpg"
                  className={classes.avatar}
                />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography component="p">
              Dr. King was 26 when the Montgomery bus boycott began. He started small, rallying others who believed their efforts mattered, pressing on through challenges and doubts to change our world for the better. A permanent inspiration for the rest of us to keep pushing towards justice.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            20
            <div className={classes.spaceBetweenIcons} />

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <CommentIcon />
            </IconButton>
            10
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);