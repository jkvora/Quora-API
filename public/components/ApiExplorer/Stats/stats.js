import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function StatsApi(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Stats
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Stats
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Stats
      </Button>
    </div>
  );
}

StatsApi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatsApi);
