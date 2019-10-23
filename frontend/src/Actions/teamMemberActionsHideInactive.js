import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Mouse from "@material-ui/icons/Mouse";
import AutoRenew from "@material-ui/icons/Autorenew";
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import DateRange from "@material-ui/icons/DateRange";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MailOutline from "@material-ui/icons/MailOutline";
import VerticalAlignBottom from "@material-ui/icons/VerticalAlignBottom";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import CancelOutlined from "@material-ui/icons/CancelOutlined";
import Container from "@material-ui/core/Container";
import Build from "@material-ui/icons/Build";
import Grid from "@material-ui/core/Grid";
import { Redirect, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    align: "center"
    // width: "31%"
  },

  button: {
    margin: theme.spacing.unit,
    align: "center",
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  dialogTitle: {
    marginBottom: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#00838f" }
  }
});

class TeamMemberActionsv2 extends React.Component {
  state = {
    anchorEl: null,
    redirect: false
  };

  handleRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  /* Select menu options */
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Email</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Download</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Delete</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Void</MenuItem>
      </Menu>
    );

    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Container maxWidth="sm">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Paper className={classes.root} elevation={7}>
                <Link style={navStyle} to="/teammembers/newmember">
                  {/* Add new team member button */}
                  <Button
                    variant="contained"
                    className={classes.button}
                    //onClick={this.handleClickOpen}
                  >
                    <AddIcon
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                    Add New
                  </Button>
                </Link>
                {/* Hide inactive button */}
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleRedirect}
                >
                  <Visibility
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Hide Inactive
                </Button>
              </Paper>
            </Grid>
          </Container>
          {this.state.redirect ? (
            <Redirect push to="/teammembers/hideinactive" />
          ) : null}
        </Grid>
      </div>
    );
  }
}

TeamMemberActionsv2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamMemberActionsv2);
