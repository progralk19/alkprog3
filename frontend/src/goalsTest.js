import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Cyan from "@material-ui/core/colors/cyan";
import Switch from "@material-ui/core/Switch";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Redirect, Link } from "react-router-dom";

import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textFieldGoal: {
    marginLeft: theme.spacing(10),
    ///marginTop: theme.spacing(1),
    width: 800
  },

  textFieldObj: {
    marginLeft: theme.spacing(20),
    ///marginTop: theme.spacing(1),
    width: 800
  },

  root: {
    width: "100%",
    //marginLeft: theme.spacing.unit * 22,
    // paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
    //backgroundColor: red[200]
  },

  marg: {
    marginLeft: theme.spacing(2)
  },

  rootTitle: {
    width: "100%",
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(2),
    backgroundColor: Cyan[800],
    color: theme.palette.getContrastText("#00838f")

    //paddingTop: theme.spacing.unit,
    //paddingBottom: theme.spacing.unit * 2
  },

  saveButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  addGoal1Button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  checkBoxPadding: {
    paddingBottom: theme.spacing(2)
  },

  success: {
    backgroundColor: green[600]
  },

  iconSnack: {
    fontSize: 5
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(10)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

const variantIcon = {
  success: CheckCircleIcon
};

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

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon
            className={classNames(classes.iconSnack, classes.iconVariant)}
          />
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
          <CloseIcon className={classes.iconSnack} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

class GoalsTest extends React.Component {
  state = {
    open: false,
    navigate: false,
    //intervalIsSet: null
    therapistData: [],
    therapist: "",
    // condition
    checkedContact2: false,
    checkedContact3: false,
    // redirect
    redirect: false,
    // add goals
    addGoal1: false,
    addGoal2: false,
    addGoal3: false,
    addGoal4: false,
    addGoal5: false,
    addGoal6: false,
    addGoal7: false,
    addGoal8: false,
    addGoal9: false,
    addGoal10: false,
    // add objectives
    addObj1_1: false,
    addObj1_2: false,
    addObj1_3: false,
    addObj2_1: false,
    addObj2_2: false,
    addObj2_3: false,
    addObj3_1: false,
    addObj3_2: false,
    addObj3_3: false,
    addObj4_1: false,
    addObj4_2: false,
    addObj4_3: false,
    addObj5_1: false,
    addObj5_2: false,
    addObj5_3: false,
    addObj6_1: false,
    addObj6_2: false,
    addObj6_3: false,
    addObj7_1: false,
    addObj7_2: false,
    addObj7_3: false,
    addObj8_1: false,
    addObj8_2: false,
    addObj8_3: false,
    addObj9_1: false,
    addObj9_2: false,
    addObj9_3: false,
    addObj10_1: false,
    addObj10_2: false,
    addObj10_3: false,
    //1
    goal1: null,
    obj1_1: null,
    obj1_2: null,
    obj1_3: null,
    // 2
    goal2: null,
    obj2_1: null,
    obj2_2: null,
    obj2_3: null,
    //3
    goal3: null,
    obj3_1: null,
    obj3_2: null,
    obj3_3: null,
    //4
    goal4: null,
    obj4_1: null,
    obj4_2: null,
    obj4_3: null,
    //5
    goal5: null,
    obj5_1: null,
    obj5_2: null,
    obj5_3: null,
    //6
    goal6: null,
    obj6_1: null,
    obj6_2: null,
    obj6_3: null,
    //7
    goal7: null,
    obj7_1: null,
    obj7_2: null,
    obj7_3: null,
    //8
    goal8: null,
    obj8_1: null,
    obj8_2: null,
    obj8_3: null,
    //9
    goal9: null,
    obj9_1: null,
    obj9_2: null,
    obj9_3: null,
    //10
    goal10: null,
    obj10_1: null,
    obj10_2: null,
    obj10_3: null,
    //
    activeGoal1: false,
    activeGoal2: false,
    activeGoal3: false,
    activeGoal4: false,
    activeGoal5: false,
    activeGoal6: false,
    activeGoal7: false,
    activeGoal8: false,
    activeGoal9: false,
    activeGoal10: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/allclients")
      .then(response => {
        console.log("Got client data!");
        console.log(response.data);
        this.setState({
          clientData: response.data
        });
      })
      .then(response2 => {
        return axios
          .get("http://localhost:5000/gettherapists") // this is not using the sequelize method
          .then(response2 => {
            console.log("Got therapist data!");
            console.log(response2.data);
            this.setState({
              therapistData: response2.data
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

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
      console.log("Unmounted from client data!");
    }
  }

  onSubmit() {
    //experiment keeping preventDefault
    //e.preventDefault();

    const clientObj = {
      // client info
      checkedActive: this.state.checkedActive,
      clientType: this.state.clientType,
      clientFirstName: this.state.clientFirstName,
      clientLastName: this.state.clientLastName,
      clientEmail: this.state.clientEmail,
      clientTitle: this.state.clientTitle,
      clientCurrentPassword: this.state.clientCurrentPassword,
      clientConfirmPassword: this.state.clientConfirmPassword,
      clientPhone: this.state.clientPhone,
      clientAddress: this.state.clientAddress,
      sessionType: this.state.sessionType,
      sessionCost: this.state.sessionCost,
      sessionLength: this.state.sessionLegnth,
      clientBday: this.state.clientBday,
      clientState: this.state.clientState,
      clientCity: this.state.clientCity,
      clientZipCode: this.state.clientZipCode,
      clientStreetAddress: this.state.clientStreetAddress,
      clientNotes: this.state.clientNotes,
      // contact info
      contactFirstName: this.state.contactFirstName,
      contactLastName: this.state.contactLastName,
      contactEmail: this.state.contactEmail,
      contactTitle: this.state.contactTitle,
      contactPhone: this.state.contactPhone,
      contactAddress: this.state.contactAddress,
      contactCity: this.state.contactCity,
      contactState: this.state.contactState,
      contactZip: this.state.contactZip,
      // contact 2 info
      contactFirstName2: this.state.contactFirstName2,
      contactLastName2: this.state.contactLastName2,
      contactEmail2: this.state.contactEmail2,
      contactTitle2: this.state.contactTitle2,
      contactPhone2: this.state.contactPhone2,
      contactAddress2: this.state.contactAddress2,
      contactCity2: this.state.contactCity2,
      contactState2: this.state.contactState2,
      contactZip2: this.state.contactZip2,
      // contact 3 info
      contactFirstName3: this.state.contactFirstName3,
      contactLastName3: this.state.contactLastName3,
      contactEmail3: this.state.contactEmail3,
      contactTitle3: this.state.contactTitle3,
      contactPhone3: this.state.contactPhone3,
      contactAddress3: this.state.contactAddress3,
      contactCity3: this.state.contactCity3,
      contactState3: this.state.contactState3,
      contactZip3: this.state.contactZip3,
      // payor info
      billingFirstName: this.state.billingFirstName,
      billingLastName: this.state.billingLastName,
      nameOnCard: this.state.nameOnCard,
      cardNum: this.state.cardNum,
      payorEmail: this.state.payorEmail,
      payorTitle: this.state.payorTitle,
      paymentType: this.state.paymentType,
      billingPhone: this.state.billingPhone,
      billingAddress: this.state.billingAddress,
      billingCity: this.state.billingCity,
      billingZip: this.state.billingZip,
      billingState: this.state.billingState,
      cvv: this.state.cvv,
      expDate: this.state.expDate,
      cardType: this.state.cardType
    };
    axios
      .post("http://localhost:5000/clients/registerclient", clientObj)
      .then(response => {
        this.setState({
          clientObj,
          redirect: true
        });
      });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleGoalActive = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleAdd1stGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal1: !this.state.activeGoal1,
      addGoal1: !this.state.addGoal1,
      goal1: null,
      obj1_1: null,
      obj1_2: null,
      obj1_3: null
    });
  };

  handleAdd2ndGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal2: !this.state.activeGoal2,
      addGoal2: !this.state.addGoal2,
      goal2: null,
      obj2_1: null,
      obj2_2: null,
      obj2_3: null
    });
  };

  handleAdd3rdGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal3: !this.state.activeGoal3,
      addGoal3: !this.state.addGoal3,
      goal3: null,
      obj3_1: null,
      obj3_2: null,
      obj3_3: null
    });
  };

  handleAdd4thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal4: !this.state.activeGoal4,
      addGoal4: !this.state.addGoal4,
      goal4: null,
      obj4_1: null,
      obj4_2: null,
      obj4_3: null
    });
  };

  handleAdd5thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal5: !this.state.activeGoal5,
      addGoal5: !this.state.addGoal5,
      goal5: null,
      obj5_1: null,
      obj5_2: null,
      obj5_3: null
    });
  };

  handleAdd6thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal6: !this.state.activeGoal6,
      addGoal6: !this.state.addGoal6,
      goal6: null,
      obj6_1: null,
      obj6_2: null,
      obj6_3: null
    });
  };

  handleAdd7thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal7: !this.state.activeGoal7,
      addGoal7: !this.state.addGoal7,
      goal7: null,
      obj7_1: null,
      obj7_2: null,
      obj7_3: null
    });
  };

  handleAdd8thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal8: !this.state.activeGoal8,
      addGoal8: !this.state.addGoal8,
      goal8: null,
      obj8_1: null,
      obj8_2: null,
      obj8_3: null
    });
  };

  handleAdd9thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal9: !this.state.activeGoal9,
      addGoal9: !this.state.addGoal9,
      goal9: null,
      obj9_1: null,
      obj9_2: null,
      obj9_3: null
    });
  };

  handleAdd10thGoal = name => event => {
    this.setState({
      [name]: event.target.checked,
      activeGoal10: !this.state.activeGoal10,
      addGoal10: !this.state.addGoal10,
      goal10: null,
      obj10_1: null,
      obj10_2: null,
      obj10_3: null
    });
  };

  handleClickSnackBar = () => {
    this.setState({ open: true });
  };

  handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.root} elevation={1}>
            {this.state.addGoal1 ? null : (
              <Typography className={classes.title} align="center" variant="h6">
                It looks like you haven't added any goals or objectives. Check
                the box below to begin adding some!
              </Typography>
            )}
            {this.state.addGoal1 ? null : (
              <Grid container justify="center">
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal1}
                          onChange={this.handleAdd1stGoal("addGoal1")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal1}
                        />
                      }
                      label="Add goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            )}

            {this.state.addGoal1 ? (
              <Grid container direction="column">
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <MuiThemeProvider theme={theme}>
                          <Checkbox
                            color="primary"
                            checked={this.state.addGoal1}
                            onChange={this.handleAdd1stGoal("addGoal1")}
                            classes={{
                              root: classes.checkedRoot,
                              checked: classes.checked
                            }}
                            value={this.state.addGoal1}
                          />
                        </MuiThemeProvider>
                      }
                      label="Add goal"
                    />
                  </FormGroup>
                </Container>

                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal1}
                          onChange={this.handleChangeChecked("activeGoal1")}
                          value={this.state.activeGoal1}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal1"
                  label="Goal 1"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal1}
                  onChange={this.handleChange("goal1")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 1_1"
                  label="Objective 1_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj1_1}
                  onChange={this.handleChange("obj1_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 1_2"
                  label="Objective 1_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj1_2}
                  onChange={this.handleChange("obj1_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 1_3"
                  label="Objective 1_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj1_3}
                  onChange={this.handleChange("obj1_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal2}
                          onChange={this.handleAdd2ndGoal("addGoal2")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value="addGoal2"
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal2 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal2}
                          onChange={this.handleGoalActive("activeGoal2")}
                          value={this.state.activeGoal2}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal2"
                  label="Goal 2"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal2}
                  onChange={this.handleChange("goal2")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 2_1"
                  label="Objective 2_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj2_1}
                  onChange={this.handleChange("obj2_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 2_2"
                  label="Objective 2_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj2_2}
                  onChange={this.handleChange("obj2_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 2_3"
                  label="Objective 2_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj2_3}
                  onChange={this.handleChange("obj2_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal3}
                          onChange={this.handleAdd3rdGoal("addGoal3")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal3}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal3 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal3}
                          onChange={this.handleGoalActive("activeGoal3")}
                          value={this.state.activeGoal3}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal3"
                  label="Goal 3"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal3}
                  onChange={this.handleChange("goal3")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 3_1"
                  label="Objective 3_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj3_1}
                  onChange={this.handleChange("obj3_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 3_2"
                  label="Objective 3_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj3_2}
                  onChange={this.handleChange("obj3_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 3_3"
                  label="Objective 3_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj3_3}
                  onChange={this.handleChange("obj3_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal4}
                          onChange={this.handleAdd4thGoal("addGoal4")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal4}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal4 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal4}
                          onChange={this.handleGoalActive("activeGoal4")}
                          value={this.state.activeGoal4}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal4"
                  label="Goal 4"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal4}
                  onChange={this.handleChange("goal4")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 4_1"
                  label="Objective 4_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj4_1}
                  onChange={this.handleChange("obj4_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 4_2"
                  label="Objective 4_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj4_2}
                  onChange={this.handleChange("obj4_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 4_3"
                  label="Objective 4_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj4_3}
                  onChange={this.handleChange("obj4_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal5}
                          onChange={this.handleAdd5thGoal("addGoal5")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal5}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal5 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal5}
                          onChange={this.handleGoalActive("activeGoal5")}
                          value={this.state.activeGoal5}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal5"
                  label="Goal 5"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal5}
                  onChange={this.handleChange("goal5")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 5_1"
                  label="Objective 5_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj5_1}
                  onChange={this.handleChange("obj5_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 5_2"
                  label="Objective 5_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj5_2}
                  onChange={this.handleChange("obj5_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 5_3"
                  label="Objective 5_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj5_3}
                  onChange={this.handleChange("obj5_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal6}
                          onChange={this.handleAdd6thGoal("addGoal6")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal6}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal6 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal6}
                          onChange={this.handleGoalActive("activeGoal6")}
                          value={this.state.activeGoal6}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal6"
                  label="Goal 6"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal6}
                  onChange={this.handleChange("goal6")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 6_1"
                  label="Objective 6_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj6_1}
                  onChange={this.handleChange("obj6_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 6_2"
                  label="Objective 6_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj6_2}
                  onChange={this.handleChange("obj6_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 6_3"
                  label="Objective 6_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj6_3}
                  onChange={this.handleChange("obj6_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal7}
                          onChange={this.handleAdd7thGoal("addGoal7")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal7}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal7 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal7}
                          onChange={this.handleGoalActive("activeGoal7")}
                          value={this.state.activeGoal7}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal7"
                  label="Goal 7"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal7}
                  onChange={this.handleChange("goal7")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 7_1"
                  label="Objective 7_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj7_1}
                  onChange={this.handleChange("obj7_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 7_2"
                  label="Objective 7_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj7_2}
                  onChange={this.handleChange("obj7_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 7_3"
                  label="Objective 7_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj7_3}
                  onChange={this.handleChange("obj7_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal8}
                          onChange={this.handleAdd8thGoal("addGoal8")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal8}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal8 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal8}
                          onChange={this.handleGoalActive("activeGoal8")}
                          value={this.state.activeGoal8}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal8"
                  label="Goal 8"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal8}
                  onChange={this.handleChange("goal8")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 8_1"
                  label="Objective 8_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj8_1}
                  onChange={this.handleChange("obj8_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 8_2"
                  label="Objective 8_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj8_2}
                  onChange={this.handleChange("obj8_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 8_3"
                  label="Objective 8_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj8_3}
                  onChange={this.handleChange("obj8_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal9}
                          onChange={this.handleAdd9thGoal("addGoal9")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal9}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal9 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal9}
                          onChange={this.handleGoalActive("activeGoal9")}
                          value={this.state.activeGoal9}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal9"
                  label="Goal 9"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal9}
                  onChange={this.handleChange("goal9")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 9_1"
                  label="Objective 9_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj9_1}
                  onChange={this.handleChange("obj9_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 9_2"
                  label="Objective 9_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj9_2}
                  onChange={this.handleChange("obj9_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 9_3"
                  label="Objective 9_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj9_3}
                  onChange={this.handleChange("obj9_3")}
                  margin="normal"
                />
                <Container>
                  <FormGroup className={classes.checkBoxPadding} row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={this.state.addGoal10}
                          onChange={this.handleAdd10thGoal("addGoal10")}
                          classes={{
                            root: classes.checkedRoot,
                            checked: classes.checked
                          }}
                          value={this.state.addGoal10}
                        />
                      }
                      label="Add additional goal"
                    />
                  </FormGroup>
                </Container>
              </Grid>
            ) : null}

            {this.state.addGoal10 ? (
              <Grid container direction="column">
                <MuiThemeProvider theme={theme}>
                  <FormGroup row>
                    <FormControlLabel
                      className={classes.marg}
                      control={
                        <Switch
                          checked={this.state.activeGoal10}
                          onChange={this.handleGoalActive("activeGoal10")}
                          value={this.state.activeGoal10}
                          color="primary"
                        />
                      }
                      label="Active Goal"
                    />
                  </FormGroup>
                </MuiThemeProvider>
                <TextField
                  required
                  multiline
                  id="goal10"
                  label="Goal 10"
                  variant="outlined"
                  className={classes.textFieldGoal}
                  value={this.state.goal10}
                  onChange={this.handleChange("goal10")}
                  margin="normal"
                />

                <TextField
                  multiline
                  id="obj 10_1"
                  label="Objective 10_1"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj10_1}
                  onChange={this.handleChange("obj10_1")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 10_2"
                  label="Objective 10_2"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj10_2}
                  onChange={this.handleChange("obj10_2")}
                  margin="normal"
                />
                <TextField
                  multiline
                  id="obj 10_3"
                  label="Objective 10_3"
                  variant="outlined"
                  className={classes.textFieldObj}
                  value={this.state.obj10_3}
                  onChange={this.handleChange("obj10_3")}
                  margin="normal"
                />
              </Grid>
            ) : null}

            <Grid container justify="flex-end">
              <Button
                className={classes.saveButton}
                size="large"
                variant="contained"
                onClick={() => {
                  this
                    .onSubmit
                    /*
                    this.state.clientType,
                    this.state.clientFirstName,
                    this.state.clientLastName,
                    this.state.clientEmail,
                    this.state.clientTitle,
                    this.state.clientCurrentPassword,
                    this.state.clientConfirmPassword,
                    this.state.sessionType,
                    this.state.sessionCost,
                    this.state.sessionLegnth,
                    this.state.clientPhone,
                    this.state.clientAddress,
                    this.state.clientBday,
                    this.state.clientCity,
                    this.state.clientState,
                    this.state.clientZipCode,
                    this.state.clientStreetAddress,
                    this.state.contactNotes,
                   
                    this.state.contactFirstName,
                    this.state.contactLastName,
                    this.state.contactEmail,
                    this.state.contactTitle,
                    this.state.contactPhone,
                    this.state.contactAddress,
                    this.state.contactCity,
                    this.state.contactState,
                    this.state.contactZip,
         
                    this.state.contactFirstName2,
                    this.state.contactLastName2,
                    this.state.contactEmail2,
                    this.state.contactTitle2,
                    this.state.contactPhone2,
                    this.state.contactAddress2,
                    this.state.contactCity2,
                    this.state.contactState2,
                    this.state.contactZip2,
              
                    this.state.contactFirstName3,
                    this.state.contactLastName3,
                    this.state.contactEmail3,
                    this.state.contactTitle3,
                    this.state.contactPhone3,
                    this.state.contactAddress3,
                    this.state.contactCity3,
                    this.state.contactState3,
                    this.state.contactZip3,
               
                    this.state.billingFirstName,
                    this.state.billingLastName,
                    this.state.nameOnCard,
                    this.state.cardNum,
                    this.state.payorEmail,
                    this.state.payorTitle,
                    this.state.paymentType,
                    this.state.billingPhone,
                    this.state.billingAddress,
                    this.state.billingCity,
                    this.state.billingZip,
                    this.state.billingState,
                    this.state.cvv,
                    this.state.expDate,
                    this.state.cardType
                    */
                    ();
                }}
              >
                {/*  <Link style={navStyle} to="/clients"> */}
                Save
                {/*   </Link> */}
              </Button>
              {/*
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleCloseSnackBar}
              >
                <MySnackbarContentWrapper
                  onClose={this.handleCloseSnackBar}
                  variant="success"
                  message="Your new client has been saved!"
                />
              </Snackbar>
              */}
            </Grid>
          </Paper>
        </form>
      </Container>
    );
  }
}

GoalsTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GoalsTest);
