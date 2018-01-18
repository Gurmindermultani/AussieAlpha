import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FolderIcon from 'material-ui-icons/Folder';
import ImageIcon from 'material-ui-icons/Image';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  arrowDown : {
    height : 25,
    width : 25,
    color : '#dd4b39'
  },
  arrowUp : {
    height : 25,
    width : 25,
    color : '#9ed474'
  },
  redPercent: {
    color : '#dd4b39'
  },
  greenPrecent : {
    color : '#9ed474'
  }
});

function Ticker(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <Divider/>
      <ListItem button>
        <ListItemText primary="BIDU" secondary="Baidu, Inc." />
        <ListItemSecondaryAction>
          <Typography align='center' type="subheading">
            $ 235.00
          </Typography>
          <Typography className={classes.redPercent} type="body1">
            -5.60 (-0.5%)
            <ArrowDropDown className={classes.arrowDown} />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary="GOOG" secondary="Alphabet Inc." />
        <ListItemSecondaryAction>
          <Typography align='center' type="subheading">
            $ 935.00
          </Typography>
          <Typography className={classes.redPercent} type="body1">
            -4.70 (-0.05%)
            <ArrowDropDown className={classes.arrowDown} />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary="GS" secondary="GoldMan Sach." />
        <ListItemSecondaryAction>
          <Typography align='center' type="subheading">
            $ 435.00
          </Typography>
          <Typography className={classes.greenPrecent} type="body1">
            2.80 (+0.45%)
            <ArrowDropUp className={classes.arrowUp} />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary="TSLA" secondary="Tesla Inc." />
        <ListItemSecondaryAction>
          <Typography align='center' type="subheading">
            $ 306.00
          </Typography>
          <Typography className={classes.greenPrecent} type="body1">
            23.45 (+2.5%)
            <ArrowDropUp className={classes.arrowUp} />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button>
        <ListItemText primary="QQQ" secondary="Powershares" />
        <ListItemSecondaryAction>
          <Typography align='center' type="subheading">
            $ 154.00
          </Typography>
          <Typography className={classes.redPercent} type="body1">
            -24.00 (-9.5%)
            <ArrowDropUp className={classes.arrowDown} />
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
    </List>
  );
}

Ticker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ticker);