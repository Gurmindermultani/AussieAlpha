import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    marginLeft : 10,
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
  inputContainer :{
    width: 'calc(100% - 150px)',
  },
  postButton:{
    marginLeft: 15,
    backgroundColor : '#2C98F0'
  },
  userAvatar: {
    height : 40,
    width : 40
  }
});

function PostInput(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <AccountCircle className={classes.userAvatar}/>
      <TextField
        className={classes.inputContainer}
        placeholder="What's on your mind?"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          className: classes.textFieldFormLabel,
        }}
      />
      <Button raised color="primary" className={classes.postButton}>
        Post
      </Button>
    </div>
  );
}

PostInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostInput);