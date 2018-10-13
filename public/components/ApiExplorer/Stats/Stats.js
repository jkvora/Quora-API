import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function StatsApi(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={props.stats}
        disabled={!props.validurl}
      >
        Stats
      </Button>
    </div>
  );
}

StatsApi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatsApi);
