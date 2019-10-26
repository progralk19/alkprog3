//import { query } from "./connection";
var query = require("./connection");
//var query = connection.query();

class MemberService {
  static async getAllMembers() {
    const sql = "SELECT * FROM members";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getActiveTherapists() {
    const sql = "SELECT id, member_full_name FROM members WHERE active =1";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async addOne(newOne) {
    const sql =
      "INSERT INTO members (active, member_full_name, member_first_name, member_last_name, email, role, title, phone, street_address, location, npi, city, zip, notes, bday) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const {
      checkedActive,
      memberFullName,
      memberFirstName,
      memberLastName,
      memberEmail,
      memberRole,
      memberTitle,
      memberPhone,
      memberAddress,
      memberLocation,
      memberNpi,
      memberCity,
      memberZipCode,
      memberNotes,
      memberBday
    } = newOne;
    try {
      return await query(sql, [
        checkedActive,
        memberFullName,
        memberFirstName,
        memberLastName,
        memberEmail,
        memberRole,
        memberTitle,
        memberPhone,
        memberAddress,
        memberLocation,
        memberNpi,
        memberCity,
        memberZipCode,
        memberNotes,
        memberBday
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  /*
  static async addOne(newOne) {
    const sql =
      "INSERT INTO members (member_full_name, member_first_name, member_last_name, email, role, title, pass, confirm_pass, street_address, location, npi, city, zip, notes, bday, active) VALUES (?,?, ?, ?, ?, ?,?, ?,?, ?, ?, ?, ?, ?,?, ?) ";
    const {
      memberFullName = req.body.memberFirstName + req.body.memberLastName,
      memberFirstName,
      memberLastName,
      memberEmail,
      memberRole,
      memberTitle,
      memberCurrentPass,
      memberConfirmPass,
      memberPhone,
      memberAddress,
      memberLocation,
      memberNpi,
      memberCity,
      memberZipCode,
      memberNotes,
      memberBday,
      checkedActive
    } = newOne;

    try {
      return await query(sql, [
        memberFullName,
        memberFirstName,
        memberLastName,
        memberEmail,
        memberRole,
        memberTitle,
        memberCurrentPass,
        memberConfirmPass,
        memberPhone,
        memberAddress,
        memberLocation,
        memberNpi,
        memberCity,
        memberZipCode,
        memberNotes,
        memberBday,
        checkedActive
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }
  */
}

//export default MemberService;
module.exports = MemberService;
