import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AccountsActions from "../Actions/accountsActions";
import Container from "@material-ui/core/Container";
import Cyan from "@material-ui/core/colors/cyan";
import AccountsTable from "../Tables/accountsTable";

import API from "../utils/API";

const styles = theme => ({
  root: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(5),
    backgroundColor: Cyan[800]
    //fontSize: "17"
  }
});
class AccountsInvoicesTabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 0,
      toggleAccountsTableUpdated: false,
      selectedAccountIds: [],
      toggleTransactionsTableUpdated: false,
      selectedTransactionIds: [],
      toggleInvoicesTableUpdated: false,
      selectedInvoiceIds: [],
      startDate: '',
      endDate: '',
      keyword: ''
    };
  }  

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  updateAccountsTable = (start, end, keyword) => {
    this.setState((prevState => ({
      toggleAccountsTableUpdated: !prevState.toggleAccountsTableUpdated,
      startDate: start,
      endDate: end,
      keyword: keyword
    })));
  };

  updateTransactionsTable = () => {
    this.setState(prevState => ({
      toggleTransactionsTableUpdated: !prevState.toggleTransactionsTableUpdated
    }));
  };

  updateInvoicesTable = () => {
    this.setState(prevState => ({
      toggleInvoicesTableUpdated: !prevState.toggleInvoicesTableUpdated
    }));
  };

  deleteTransactions = () => {
    API.post(
      "/accounts/transactions/deleteMany",
      this.state.selectedTransactionIds
    )
      .then(resp => {
        this.updateTransactionsTable();
      })
      .catch(error => {
        console.log("Error ocurred while deleting transactions: ", error);
      });
  };

  handleAccountsSelected = ids => {
    this.setState({ selectedAccountIds: [...ids] });
  };

  handleTransactionsSelected = ids => {
    this.setState({ selectedTransactionIds: [...ids] });
  };

  handleInvoicesSelected = ids => {
    this.setState({ selectedInvoiceIds: [...ids] });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Container maxWidth="sm">
          <AppBar className={classes.root} position="static">
            <Tabs
              indicatorColor="primary"
              value={value}
              onChange={this.handleChangeTab}
              fontSize="17"
            >
              <Tab label="Accounts" />
              <Tab label="Payments  " />
              <Tab label="Invoices" />
            </Tabs>
          </AppBar>
        </Container>

        {value === 0 && (
          <AccountsActions onUpdated={this.updateAccountsTable} />
        )}
        {value === 0 && (
          <AccountsTable
            toggleUpdated={this.state.toggleAccountsTableUpdated}
            onSelectedUpdated={this.handleTransactionsSelected}
            startDate={ this.state.startDate }
            endDate={ this.state.endDate }
            keyword={ this.state.keyword }
          />
        )}
        {/* {value === 1 && (
          <TransactionsActions
            onUpdated={this.updateTransactionsTable}
            onDelete={this.deleteTransactions}
          />
        )}
        {value === 1 && (
          <TransactionsTable
            toggleUpdated={this.state.toggleTransactionsTableUpdated}
            onSelectedUpdated={this.handleTransactionsSelected}
          />
        )}
        {value === 2 && <InvoiceActions onUpdated={this.updateInvoicesTable} />}
        {value === 2 && (
          <InvoicesTable
            toggleUpdated={this.state.toggleInvoicesTableUpdated}
            onSelectedUpdated={this.handleInvoicesSelected}
          />
        )} */}
      </div>
    );
  }
}

AccountsInvoicesTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountsInvoicesTabs);
