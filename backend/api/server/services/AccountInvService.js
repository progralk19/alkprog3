import { query } from "./connection";

class AccountInvService {
  static async getTransactions() {
    var sql =
      "SELECT id, DATE_FORMAT(date, '%m/%d/%Y') as transDate, transType, payor, amount, method, description  from transactions";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getPayors() {
    let sql = "SELECT DISTINCT (billing_full_name) FROM clients";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getAccounts() {
    var sql =
      "SELECT concat_ws(', ',billing_last_name, billing_first_name) as payor, billing_email, billing_full_name, client_type, billing_phone, payment_type, group_concat(client_full_name separator ', ') as client FROM clients GROUP BY payor, billing_email, billing_full_name, client_type, client_type, billing_phone, payment_type";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getAccountDetail() {
    var sql =
      "SELECT DATE_FORMAT(testevent.start, '%m/%d/%Y')  as date, client, billing_email, therapist, timestampdiff(MINUTE, start, end) as duration, ((timestampdiff(MINUTE, start, end)/session_set_length) * session_cost) as actual_cost from testevent";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getAccountDetail2(selected) {
    var sql = `SELECT DATE_FORMAT(testevent.start, '%m/%d/%Y')  as date, client, billing_email, therapist, timestampdiff(MINUTE, start, end) as duration, ((timestampdiff(MINUTE, start, end)/session_set_length) * session_cost) as actual_cost from testevent  where billing_email = ?`;
    const { billingEmail } = selected;
    try {
      return await query(sql, [billingEmail]);
    } catch (error) {
      throw error;
    }
  }

  /* Original without the consolidation of clients onto one row
  static async getAccounts() {
    var sql =
      "SELECT id, concat_ws(', ',billing_last_name, billing_first_name) as payor, billing_last_name, billing_first_name, concat_ws(', ',client_last_name, client_first_name) as client, client_last_name, client_first_name, client_type, billing_phone, billing_email, payment_type FROM clients";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
  */

  static async getInvoices() {
    var sql =
      "SELECT id, status,  DATE_FORMAT(inv_date, '%m/%d/%Y') as inv_date, payor_first, payor_last, DATE_FORMAT(start_date, '%m/%d/%Y') as start_date, DATE_FORMAT(end_date, '%m/%d/%Y') as end_date, amount from invoices";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    const sql = `DELETE FROM testevent WHERE id = ${id}`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async addOneTrans(newOne) {
    const sql =
      "INSERT INTO transactions (date, transType, payor, amount, method, description) VALUES (?, ?, ?, ?, ?,?) ";
    const { date, transType, payor, amount, method, description } = newOne;

    try {
      return await query(sql, [
        date,
        transType,
        payor,
        amount,
        method,
        description
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  static async addOneManInvoice(newOne) {
    const sql =
      "INSERT INTO invoices (inv_date, payor, start_date, end_date, amount) VALUES (?, ?, ?, ?, ?) ";
    const { invoiceDate, payor, startDate, endDate, amount } = newOne;

    try {
      return await query(sql, [
        invoiceDate,
        payor,
        startDate,
        endDate,
        //dueDate,
        amount
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  static async deleteMany(ids) {
    if (!ids || ids.length === 0) throw Error("ids not valid.");
    let sql = "DELETE FROM transactions WHERE id IN (";
    for (const id of ids) {
      sql += id + ", ";
    }

    sql = sql.substr(0, sql.length - 2);
    sql += ")";

    try {
      return await query(sql);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }
}

export default AccountInvService;
