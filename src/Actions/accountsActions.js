import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AutoRenew from "@material-ui/icons/Autorenew";
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import DateRange from "@material-ui/icons/DateRange";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

moment().toDate();

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
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

  iconSmall: {
    fontSize: 20
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

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

class AccountsActions extends React.Component {
  state = {
    anchorEl: null,
    openTransactions: false,
    openDateRange: false,
    payor: "",
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment()
      .add(1, "month")
      .format("YYYY-MM-DD"),
    invoiceDate: "",
    invoiceAmount: "",
    dueDate: "",
    invoiceNotes: ""
  };

  /* change of team member dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  /* show date range diaglog box */
  handleClickOpenDateRange = () => {
    this.setState({ openDateRange: true });
  };

  /* close date range diaglog box */
  handleCloseDateRange = () => {
    this.setState({ openDateRange: false });
  };

  /* cancel date range diaglog box */
  handleCancelDateRange = () => {
    this.setState({
      openDateRange: false,
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment()
        .add(1, "month")
        .format("YYYY-MM-DD")
    });
  };

  handleDateChangeStart = date => {
    this.setState({ startDate: date.format("YYYY-MM-DD") });
  };

  handleDateChangeEnd = date => {
    this.setState({ endDate: date.format("YYYY-MM-DD") });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Container maxWidth="md">
            <Paper className={classes.root} elevation={7}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {/* Date range button */}
                <Button
                  variant="contained"
                  onClick={this.handleClickOpenDateRange}
                  className={classes.button}
                >
                  <DateRange
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Balance Range
                </Button>

                {/* Date Range dialog box */}
                <Dialog
                  open={this.state.openDateRange}
                  onClose={this.handleCloseV}
                >
                  <DialogTitle id="form-dialog-title">
                    Balance Range
                  </DialogTitle>
                  <DialogContent>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <Grid container row>
                        <MuiThemeProvider theme={theme2}>
                          <DatePicker
                            inputVariant="outlined"
                            margin="normal"
                            className={classes.textField2}
                            label="Start Date"
                            value={this.state.startDate}
                            onChange={this.handleDateChangeStart}
                          />
                        </MuiThemeProvider>
                      </Grid>
                      <MuiThemeProvider theme={theme2}>
                        <Grid container row>
                          <DatePicker
                            inputVariant="outlined"
                            margin="normal"
                            className={classes.textField2}
                            label="End Date "
                            value={this.state.endDate}
                            onChange={this.handleDateChangeEnd}
                          />
                        </Grid>
                      </MuiThemeProvider>
                    </MuiPickersUtilsProvider>
                  </DialogContent>
                  <MuiThemeProvider theme={theme2}>
                    <DialogActions>
                      <Button
                        onClick={this.handleCancelDateRange}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={this.handleCloseDateRange}
                        color="primary"
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </MuiThemeProvider>
                </Dialog>

                {/* Auto-invoice button */}
                <Button variant="contained" className={classes.button}>
                  <AutoRenew
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Auto-Invoice
                </Button>
                {/* Show inactive button */}
                <Button variant="contained" className={classes.button}>
                  <Visibility
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Show Inactive
                </Button>
                {/* Search button */}
                <Button variant="contained" className={classes.button}>
                  <Search
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Search
                </Button>
                {/*
                <Button
                  variant="contained"
                  onClick={this.handleClickOpen2}
                  className={classes.button}
                >
                  <Visibility
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Show
                </Button>
   */}
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </div>
    );
  }
}

AccountsActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountsActions);
