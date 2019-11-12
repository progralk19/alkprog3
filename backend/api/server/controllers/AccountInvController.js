//import AccountInvService from "../services/AccountInvService";
var AccountInvService = require("../services/AccountInvService");
var Util = require("../utils/Utils");
//import Util from "../utils/Utils";

const util = new Util();

class AccountInvController {
  static async getDistinctPayors(req, res) {
    try {
      const destinctPayors = await AccountInvService.getPayors();
      if (destinctPayors.length > 0) {
        util.setSuccess(200, "Payors retrieved", destinctPayors);
      } else {
        util.setSuccess(200, "No payors found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getDistinctPayors2(req, res) {
    try {
      const destinctPayors = await AccountInvService.getPayors2();
      if (destinctPayors.length > 0) {
        util.setSuccess(200, "Payors retrieved", destinctPayors);
      } else {
        util.setSuccess(200, "No payors found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllAccounts(req, res) {
    try {
      const allAccounts = await AccountInvService.getAccounts();
      if (allAccounts.length > 0) {
        util.setSuccess(200, "Accounts retrieved", allAccounts);
      } else {
        util.setSuccess(200, "No Accounts found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllAccounts2(req, res) {
    try {
      const allAccounts2 = await AccountInvService.getAccounts2();
      if (allAccounts2.length > 0) {
        util.setSuccess(200, "Accounts retrieved", allAccounts2);
      } else {
        util.setSuccess(200, "No Accounts found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getDetailAccounts(req, res) {
    try {
      const detailAccounts = await AccountInvService.getAccountDetail();
      if (detailAccounts.length > 0) {
        util.setSuccess(200, "Account details retrieved", detailAccounts);
      } else {
        util.setSuccess(200, "No Account details found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getDetailAccounts2(req, res) {
    try {
      const detailAccounts2 = await AccountInvService.getAccountDetail2();
      if (detailAccounts2.length > 0) {
        util.setSuccess(200, "Account details retrieved", detailAccounts2);
      } else {
        util.setSuccess(200, "No Account details found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

//export default AccountInvController;
module.exports = AccountInvController;
