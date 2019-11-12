import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import TitleBarHome from "./titleBars/titleBarHome";
import TitleBarCal from "./titleBars/titleBarCalendar";
import TitleBarAccountsInv from "./titleBars/titleBarAccountsInv";
import TitleBarAccountDetails from "./titleBars/titleBarAccountDetails";
import TitleBarDocumentation from "./titleBars/titleBarDocumentation";
import AccountsInvoicesTabs from "./AcountsInvoices/accountsInvoicesTabs";
import AccountDetailsTable from "./Tables/accountDetailsTable";
import ReactCalendarBase from "./Calendar/ReactCalendarBase";
import Documentation from "./Calendar/documentation";
import Blue from "@material-ui/core/colors/blue";

import { Switch, Link, Route } from "react-router-dom";

//width of drawer
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: Blue[800]
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },

  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  }
});

const navStyle = {
  color: "black",
  textDecoration: "none"
};
const navStyle2 = {
  color: "white",
  textDecoration: "none"
};

const Page404 = () => {
  return <h3>Please select a tab from the panel</h3>;
};

class MainApp extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
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
        <MenuItem onClick={this.handleMenuClose}> Settings</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Help</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>{" "}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          elevation={1}
          /* makes sure the apps shifts when the drawer is open */
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          {/* makes sure gutters are disabled when the drawer is not open */}
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              {/* Menu icon*/}
              <MenuIcon />
            </IconButton>
            {/* MTSaaS Name */}
            <Link style={navStyle2} to="/home">
              <Typography variant="h6" color="inherit" noWrap>
                Application
              </Typography>
            </Link>
            <div className={classes.rightToolbar}>
              <IconButton color="inherit">
                <Badge color="default">
                  <MonetizationOn />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge /* badgeContent={2} */ color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            {/* no visible change */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              />
            </div>
            {/*end of toolbar and Appbar */}
          </Toolbar>
          {renderMenu}
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link style={navStyle} to="/home">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link style={navStyle} to="/calendar">
              <ListItem button>
                <ListItemIcon>
                  <InsertInvitation />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
            </Link>
            <Link style={navStyle} to="/accountsandinv">
              <ListItem button>
                <ListItemIcon>
                  <AccountBalanceWallet />
                </ListItemIcon>
                <ListItemText primary="Acounts & Invoices" />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {/* creates header space in between the body text and the top nav*/}
          <div className={classes.drawerHeader} />

          <Switch>
            <Route
              exact
              path="/home"
              render={() => (
                <div>
                  <TitleBarHome />
                </div>
              )}
            />
            <Route
              exact
              path="/calendar"
              render={() => (
                <div>
                  <TitleBarCal />
                  <ReactCalendarBase />
                </div>
              )}
            />

            <Route
              exact
              path="/documentation"
              render={() => (
                <div>
                  <TitleBarDocumentation />
                  <Documentation />
                </div>
              )}
            />

            <Route
              exact
              path="/accountsandinv"
              render={() => (
                <div>
                  <TitleBarAccountsInv />
                  <AccountsInvoicesTabs />
                </div>
              )}
            />

            <Route
              exact
              path="/accountsandinv/accountdetails"
              render={() => (
                <div>
                  <TitleBarAccountDetails />
                  <AccountDetailsTable />
                </div>
              )}
            />

            <Route
              render={() => (
                <div>
                  <Page404 />
                </div>
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
/* no visible changes */
MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainApp);
