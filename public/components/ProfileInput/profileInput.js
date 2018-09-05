import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import customstyles from './profileInput.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit
  }
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container} className={customstyles.inpwidth}>
      <Input
        placeholder="https://www.quora.com/profile/Jalak-Vora"
        className={classes.input + ' ' + customstyles.urlinput}
        inputProps={{
          'aria-label': 'Description'
        }}
      />
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Inputs);
