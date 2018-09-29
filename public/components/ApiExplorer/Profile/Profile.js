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

function ProfileApi(props) {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={props.increment}
        disabled={!props.validurl}
      >
        Profile
      </Button>
      {/* <Button variant="outlined" color="secondary" className={classes.button}>
        Profile
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Profile
      </Button> */}
    </div>
  );
}

ProfileApi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileApi);
