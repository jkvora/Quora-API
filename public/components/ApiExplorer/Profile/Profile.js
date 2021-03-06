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
        onClick={props.profile}
        disabled={!props.validurl || props.apiData.loading}
      >
        Profile
      </Button>
    </div>
  );
}

ProfileApi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileApi);
