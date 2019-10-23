import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  purpleAvatar: {
    margin: 10,
    color: theme.palette.getContrastText(deepPurple[800]),
    backgroundColor: deepPurple[800],
    "&:hover": {
      backgroundColor: deepPurple[400]
    },
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing(-28)
    //marginRight: theme.spacing.unit * 20
  }
});

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.purpleAvatar}>JB</Avatar>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LetterAvatars);
