import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import green from "@material-ui/core/colors/green";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AssignedClientsTable from "../Tables/backEndAssignedClientsTable";
import TeamMemFilesTable from "../Tables/teamMemFilesTable";
import AssignedClientsActions from "../Actions/asssignedClientsActions";
import TeamMemberInfo from "./teamMemberInfo";
import MemberUploadAction from "../Actions/memberUploadAction";
import AdminPrivliges from "./adminPrivliges";
import TherapistPrivliges from "./therapistPrivliges";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Cyan from "@material-ui/core/colors/cyan";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";
import amber from "@material-ui/core/colors/amber";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";

import axios from "axios";

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
    // paddingLeft: theme.spacing.unit,
    marginTop: theme.spacing(10),
    //marginLeft: theme.spacing.unit * 22,
    //marginRight: theme.spacing.unit * 22

    align: "center",
    //width: "66%",
    height: "130"
  },

  memberAvatar: {
    margin: 10,
    color: theme.palette.getContrastText(Cyan[800]),
    backgroundColor: Cyan[800],
    "&:hover": {
      backgroundColor: Cyan[400]
    },
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing(-18)
    //marginRight: theme.spacing.unit * 20
  },

  toggle: {
    paddingRight: theme.spacing.unit * 30
  },

  marg: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500],
    width: 100,
    height: 100,
    fontSize: 40,
    marginBottom: theme.spacing.unit * -28,
    marginRight: theme.spacing.unit * 18
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 300
  },

  textFieldTop: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing(5),
    width: 300
  },
  menu: {
    width: 200
  },

  checked: {},

  root2: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Cyan[800]
  },
  infoRoot: {
    marginBottom: theme.spacing.unit * 2
  },

  assignRoot: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    //marginLeft: theme.spacing.unit * 33.5,
    // align: "center",
    width: "14.5%"
  },

  floatButton: {
    marginTop: theme.spacing(4),
    margin: theme.spacing.unit,
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  margin: {
    margin: theme.spacing(1)
  },

  deleteButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  saveButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  },

  leftIcon: {
    // marginRight: theme.spacing.unit
  },

  formRoot: {
    marginTop: theme.spacing(2)
    // marginLeft: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(3)
  }
});

const roleTypes = [
  {
    value: "Admin",
    label: "Admin"
  },

  {
    value: "Therapist",
    label: "Therapist"
  }
];

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#80cbc4" }
  }
});

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

class MemberDetails extends React.Component {
  state = {
    checkedA: true,
    member: "Harry Potter",
    therapistData: [],
    checkedAdmin: false,
    checkedThera: false,
    checkedIntern: false,
    tabValue: 0,
    snackbarOpenWarning: false,
    snackbarOpenSuccess: false,
    snackbarOpenError: false,
    roleType: "Admin",
    // privliges
    invoice: false,
    allCalendar: false,
    payment: true,
    editOtherSched: false,
    viewOtherSched: false,
    editOtherInfo: false,
    viewOtherInfo: false,
    addClient: true,
    recordAttendance: true,
    viewNote: true,
    viewClient: false,
    kpis: true,
    viewReport: false,
    viewCalendar: true,
    viewOwnClient: true
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/members")
      .then(response => {
        console.log("Got therapist data data!");
        console.log(response.data);
        this.setState({
          therapistData: response.data
        });
      })
      .then(response2 => {
        return axios.get("http://localhost:5000/allclients").then(response2 => {
          console.log("Got client data!");
          console.log(response2.data);
          this.setState({
            clientData: response2.data
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
      console.log("Data interval set!");
    }
  }

  // kills a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from client data!");
    }
  }

  handleClickAvatar = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseAvatar = () => {
    this.setState({ anchorEl: null });
  };

  /* change of team member dropdown */
  handleChangeValue = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // change of check boxes
  handleChangeChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeCheckedAdmin = name => event => {
    this.setState({
      [name]: event.target.checked,
      invoice: true,
      allCalendar: true,
      payment: true,
      editOtherSched: true,
      viewOtherSched: true,
      editOtherInfo: true,
      viewOtherInfo: true,
      addClient: true,
      recordAttendance: true,
      viewNote: true,
      viewClient: true,
      kpis: true,
      viewReport: true,
      viewCalendar: true,
      viewOwnClient: true
    });
  };

  handleChangeCheckedTherapist = name => event => {
    this.setState({
      [name]: event.target.checked,
      invoice: false,
      allCalendar: false,
      payment: true,
      editOtherSched: false,
      viewOtherSched: false,
      editOtherInfo: false,
      viewOtherInfo: false,
      addClient: true,
      recordAttendance: true,
      viewNote: true,
      viewClient: false,
      kpis: true,
      viewReport: false,
      viewCalendar: true,
      viewOwnClient: true
    });
  };

  handleChangeCheckedIntern = name => event => {
    this.setState({
      [name]: event.target.checked,
      invoice: false,
      allCalendar: false,
      payment: false,
      editOtherSched: false,
      viewOtherSched: false,
      editOtherInfo: false,
      viewOtherInfo: false,
      addClient: false,
      recordAttendance: false,
      viewNote: false,
      viewClient: false,
      kpis: false,
      viewReport: false,
      viewCalendar: true,
      viewOwnClient: true
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeTab = (event, tabValue) => {
    this.setState({ tabValue });
  };

  //show client details box;
  handleClickClientOpen = () => {
    this.setState({ assignOpen: true });
  };

  handleClientClose = () => {
    this.setState({ assignOpen: false });
  };

  handleDeleteDialogOpen = () => {
    this.setState({ deleteDialog: true });
  };

  handleDeleteDialogClose = () => {
    this.setState({ deleteDialog: false });
  };

  handleSnackOpenError = () => {
    this.setState({ snackbarOpenError: true });
  };

  handleSnackOpenWarning = () => {
    this.setState({ snackbarOpenWarning: true });
  };

  handleSnackOpenSuccess = () => {
    this.setState({ snackbarOpenSuccess: true });
  };

  handleSnackCloseError = () => {
    this.setState({ snackbarOpenError: false });
  };

  handleSnackCloseWarning = () => {
    this.setState({ snackbarOpenWarning: false });
  };

  handleSnackCloseSuccess = () => {
    this.setState({ snackbarOpenSuccess: false });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, tabValue, clientData, therapistData } = this.state;

    return (
      <div>
        <Container maxWidth="lg">
          {/* Avatar */}
          <Paper className={classes.root} elevation={2}>
            <MuiThemeProvider theme={theme}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChangeChecked("checkedA")}
                      value="checkedA"
                      marginLeft="theme.spacing.unit * 20"
                      className={classes.marg}
                      color="primary"
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </MuiThemeProvider>
            {/* member drop down */}
            <Grid container row justify="space-between">
              <MuiThemeProvider theme={theme}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedAdmin}
                        onChange={this.handleChangeCheckedAdmin("checkedAdmin")}
                        value="checkedAdmin"
                        color="primary"
                      />
                    }
                    label="Administrator"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedThera}
                        onChange={this.handleChangeCheckedTherapist(
                          "checkedThera"
                        )}
                        value="checkedThera"
                        color="primary"
                      />
                    }
                    label="Therapist"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedIntern}
                        onChange={this.handleChangeCheckedIntern(
                          "checkedIntern"
                        )}
                        value="checkedIntern"
                        color="primary"
                      />
                    }
                    label="Intern"
                  />
                </FormGroup>
              </MuiThemeProvider>
            </Grid>
          </Paper>

          <AppBar className={classes.root2} position="static">
            {/* <MuiThemeProvider theme={theme}> */}
            <Tabs
              indicatorColor="none"
              value={tabValue}
              onChange={this.handleChangeTab}
            >
              <Tab label="Privileges " />
            </Tabs>
            {/* </MuiThemeProvider> */}
          </AppBar>

          {tabValue === 0 && (
            <Paper className={classes.infoRoot2} elevation={2}>
              {/*
              <TextField
                id="standard-select-clientType"
                select
                required
                label="Role Type"
                variant="outlined"
                className={classes.textField3}
                value={this.state.roleType}
                onChange={this.handleChange("roleType")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {roleTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              {this.state.roleType === "Admin"
                ? this.setState({ checkedAdmin: true })
                : null}
                */}

              {this.state.checkedAdmin ? (
                <Grid
                  container
                  // direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <MuiThemeProvider theme={theme}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {/* chunk 1-5 */}

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              className={classes.formRoot2}
                              color="primary"
                              checked={this.state.invoice}
                              onChange={this.handleChangeChecked("invoice")}
                              value="invoice"
                            />
                          }
                          label="Invoices/Billing"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.allCalendar}
                              onChange={this.handleChangeChecked("allCalendar")}
                              value="allCalendar"
                            />
                          }
                          label="Calendar of everyone"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.viewClient}
                              onChange={this.handleChangeChecked("viewClient")}
                              value="viewClient"
                            />
                          }
                          label="View other clients vs. own clients"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.editOtherSched}
                              onChange={this.handleChangeChecked(
                                "editOtherSched"
                              )}
                              value="editOtherSched"
                            />
                          }
                          label="Edit other therapist schedule"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.viewOtherSched}
                              onChange={this.handleChangeChecked(
                                "viewOtherSched"
                              )}
                              value="viewOtherSched"
                            />
                          }
                          label="View other therapist schedule"
                        />
                        {/* chunk 6-10 */}
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.editOtherInfo}
                              onChange={this.handleChangeChecked(
                                "editOtherInfo"
                              )}
                              value="editOtherInfo"
                            />
                          }
                          label="Edit other therapist/client info"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.viewOtherInfo}
                              onChange={this.handleChangeChecked(
                                "viewOtherInfo"
                              )}
                              value="viewOtherInfo"
                            />
                          }
                          label="View other therapist/client info"
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.addClient}
                              onChange={this.handleChangeChecked("addClient")}
                              value="addClient"
                            />
                          }
                          label="Add client"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.recordAttendance}
                              onChange={this.handleChangeChecked(
                                "recordAttendance"
                              )}
                              value="recordAttendance"
                            />
                          }
                          label="Record Attendance"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.payment}
                              onChange={this.handleChangeChecked("payment")}
                              value="payment"
                            />
                          }
                          label="Take payment"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewNote}
                              onChange={this.handleChangeChecked("viewNote")}
                              value="viewNote"
                            />
                          }
                          label="View note history"
                        />

                        {/*
                     <FormControlLabel
                       control={
                         <Switch
                           disabled
                           checked={this.state.kpis}
                           onChange={this.handleChangeChecked("kpis")}
                           value="kpis"
                         />
                       }
                       label="KPIs"
                     />
                     */}
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              color="primary"
                              checked={this.state.viewReport}
                              onChange={this.handleChangeChecked("viewReport")}
                              value="jason"
                            />
                          }
                          label="View/create reports"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewCalendar}
                              onChange={this.handleChangeChecked(
                                "viewCalendar"
                              )}
                              value="viewCalendar"
                            />
                          }
                          label="View own calendar"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewOwnClient}
                              onChange={this.handleChangeChecked(
                                "viewOwnClient"
                              )}
                              value="viewOwnClient"
                            />
                          }
                          label="View own clients"
                        />
                      </FormGroup>
                    </FormControl>
                  </MuiThemeProvider>
                </Grid>
              ) : null}

              {this.state.checkedThera ? (
                <Grid
                  container
                  // direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <MuiThemeProvider theme={theme}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {/* chunk 1-5 */}

                        <FormControlLabel
                          control={
                            <Switch
                              className={classes.formRoot2}
                              color="primary"
                              checked={this.state.invoice}
                              onChange={this.handleChangeChecked("invoice")}
                              value="invoice"
                            />
                          }
                          label="Invoices/Billing"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.allCalendar}
                              onChange={this.handleChangeChecked("allCalendar")}
                              value="allCalendar"
                            />
                          }
                          label="Calendar of everyone"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewClient}
                              onChange={this.handleChangeChecked("viewClient")}
                              value="viewClient"
                            />
                          }
                          label="View other clients vs. own clients"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.editOtherSched}
                              onChange={this.handleChangeChecked(
                                "editOtherSched"
                              )}
                              value="editOtherSched"
                            />
                          }
                          label="Edit other therapist schedule"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewOtherSched}
                              onChange={this.handleChangeChecked(
                                "viewOtherSched"
                              )}
                              value="viewOtherSched"
                            />
                          }
                          label="View other therapist schedule"
                        />
                        {/* chunk 6-10 */}
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.editOtherInfo}
                              onChange={this.handleChangeChecked(
                                "editOtherInfo"
                              )}
                              value="editOtherInfo"
                            />
                          }
                          label="Edit other therapist/client info"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewOtherInfo}
                              onChange={this.handleChangeChecked(
                                "viewOtherInfo"
                              )}
                              value="viewOtherInfo"
                            />
                          }
                          label="View other therapist/client info"
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.addClient}
                              onChange={this.handleChangeChecked("addClient")}
                              value="addClient"
                            />
                          }
                          label="Add client"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.recordAttendance}
                              onChange={this.handleChangeChecked(
                                "recordAttendance"
                              )}
                              value="recordAttendance"
                            />
                          }
                          label="Record Attendance"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewNote}
                              onChange={this.handleChangeChecked("viewNote")}
                              value="viewNote"
                            />
                          }
                          label="View note history"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.payment}
                              onChange={this.handleChangeChecked("payment")}
                              value="payment"
                            />
                          }
                          label="Take payment"
                        />

                        {/*
                     <FormControlLabel
                       control={
                         <Switch
                           disabled
                           checked={this.state.kpis}
                           onChange={this.handleChangeChecked("kpis")}
                           value="kpis"
                         />
                       }
                       label="KPIs"
                     />
                     */}
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewReport}
                              onChange={this.handleChangeChecked("viewReport")}
                              value="jason"
                            />
                          }
                          label="View/create reports"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewCalendar}
                              onChange={this.handleChangeChecked(
                                "viewCalendar"
                              )}
                              value="viewCalendar"
                            />
                          }
                          label="View own calendar"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewOwnClient}
                              onChange={this.handleChangeChecked(
                                "viewOwnClient"
                              )}
                              value="viewOwnClient"
                            />
                          }
                          label="View own clients"
                        />
                      </FormGroup>
                    </FormControl>
                  </MuiThemeProvider>
                </Grid>
              ) : null}

              {this.state.checkedIntern ? (
                <Grid
                  container
                  // direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <MuiThemeProvider theme={theme}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {/* chunk 1-5 */}

                        <FormControlLabel
                          control={
                            <Switch
                              className={classes.formRoot2}
                              color="primary"
                              checked={this.state.invoice}
                              onChange={this.handleChangeChecked("invoice")}
                              value="invoice"
                            />
                          }
                          label="Invoices/Billing"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.allCalendar}
                              onChange={this.handleChangeChecked("allCalendar")}
                              value="allCalendar"
                            />
                          }
                          label="Calendar of everyone"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.payment}
                              onChange={this.handleChangeChecked("payment")}
                              value="payment"
                            />
                          }
                          label="Take payment"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.editOtherSched}
                              onChange={this.handleChangeChecked(
                                "editOtherSched"
                              )}
                              value="editOtherSched"
                            />
                          }
                          label="Edit other therapist schedule"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewOtherSched}
                              onChange={this.handleChangeChecked(
                                "viewOtherSched"
                              )}
                              value="viewOtherSched"
                            />
                          }
                          label="View other therapist schedule"
                        />
                        {/* chunk 6-10 */}
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.editOtherInfo}
                              onChange={this.handleChangeChecked(
                                "editOtherInfo"
                              )}
                              value="editOtherInfo"
                            />
                          }
                          label="Edit other therapist/client info"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewOtherInfo}
                              onChange={this.handleChangeChecked(
                                "viewOtherInfo"
                              )}
                              value="viewOtherInfo"
                            />
                          }
                          label="View other therapist/client info"
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.addClient}
                              onChange={this.handleChangeChecked("addClient")}
                              value="addClient"
                            />
                          }
                          label="Add client"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.recordAttendance}
                              onChange={this.handleChangeChecked(
                                "recordAttendance"
                              )}
                              value="recordAttendance"
                            />
                          }
                          label="Record Attendance"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.viewNote}
                              onChange={this.handleChangeChecked("viewNote")}
                              value="viewNote"
                            />
                          }
                          label="View note history"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewClient}
                              onChange={this.handleChangeChecked("viewClient")}
                              value="viewClient"
                            />
                          }
                          label="View other clients vs. own clients"
                        />
                        {/*
                     <FormControlLabel
                       control={
                         <Switch
                           disabled
                           checked={this.state.kpis}
                           onChange={this.handleChangeChecked("kpis")}
                           value="kpis"
                         />
                       }
                       label="KPIs"
                     />
                     */}
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={this.state.viewReport}
                              onChange={this.handleChangeChecked("viewReport")}
                              value="jason"
                            />
                          }
                          label="View/create reports"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewCalendar}
                              onChange={this.handleChangeChecked(
                                "viewCalendar"
                              )}
                              value="viewCalendar"
                            />
                          }
                          label="View own calendar"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              disabled
                              checked={this.state.viewOwnClient}
                              onChange={this.handleChangeChecked(
                                "viewOwnClient"
                              )}
                              value="viewOwnClient"
                            />
                          }
                          label="View own clients"
                        />
                      </FormGroup>
                    </FormControl>
                  </MuiThemeProvider>
                </Grid>
              ) : null}
            </Paper>
          )}
        </Container>
      </div>
    );
  }
}

MemberDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MemberDetails);
