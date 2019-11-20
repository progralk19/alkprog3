// import { query } from "./connection";
var query = require("./connection");

class AccountInvService {
  static async getPayors() {
    let sql = "SELECT DISTINCT billing_full_name, billing_email FROM clients";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getPayors2() {
    let sql = "SELECT DISTINCT billing_full_name, billing_email FROM clients";

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

  static async getAccounts2() {
    var sql = `SELECT 
                DATE_FORMAT(max(x.trans_date), '%m/%d/%Y') as last_pay_date, 
                (SUM(x.session_cost)-SUM(x.amount)) as balance, 
                y.payor, 
                y.billing_email, 
                y.billing_full_name, 
                y.client_type, 
                y.billing_phone, 
                y.payment_type, 
                y.client 
              FROM 
                (SELECT 
                  CONCAT_WS(', ', billing_last_name, billing_first_name) AS payor, 
                  billing_email, 
                  billing_full_name, 
                  client_type, 
                  billing_phone, 
                  payment_type, 
                  GROUP_CONCAT(client_full_name SEPARATOR ', ') AS client 
                FROM 
                  clients GROUP BY payor , 
                  billing_email , 
                  billing_full_name ,
                  client_type , 
                  client_type , 
                  billing_phone , 
                  payment_type) as y 
                INNER JOIN 
                  testevent x ON x.billing_email = y.billing_email 
                group by  
                  y.payor, 
                  y.billing_email, 
                  y.billing_full_name, 
                  y.client_type, 
                  y.billing_phone, 
                  y.payment_type, 
                  y.client`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getAccountsParam(param) {
    const {
      startDate,
      endDate,
      keyword
    } = param;
    
    const sql = `SELECT 
                DATE_FORMAT(max(x.trans_date), '%m/%d/%Y') as last_pay_date, 
                (SUM(x.session_cost)-SUM(x.amount)) as balance, 
                y.payor, 
                y.billing_email, 
                y.billing_full_name, 
                y.client_type, 
                y.billing_phone, 
                y.payment_type, 
                y.client 
              FROM 
                (SELECT 
                  CONCAT_WS(', ', billing_last_name, billing_first_name) AS payor, 
                  billing_email, 
                  billing_full_name, 
                  client_type, 
                  billing_phone, 
                  payment_type, 
                  GROUP_CONCAT(client_full_name SEPARATOR ', ') AS client 
                FROM 
                  clients GROUP BY payor , 
                  billing_email , 
                  billing_full_name ,
                  client_type , 
                  client_type , 
                  billing_phone , 
                  payment_type) as y 
              INNER JOIN 
                testevent x ON x.billing_email = y.billing_email `;
    const groupByClause = ` group by  
                            payor, 
                            billing_email, 
                            billing_full_name, 
                            client_type, 
                            billing_phone, 
                            payment_type, 
                            client`;
    let whereClasue = ``;
    if (startDate.length > 0) {
      whereClasue = ` WHERE '${startDate}' <= x.trans_date `;
    }
    if (endDate.length > 0) {
      if (whereClasue.length > 0) {
        whereClasue = whereClasue+` AND x.trans_date <= '${endDate}' `;
      } else {
        whereClasue = ` WHERE x.trans_date <= '${endDate}' `;
      }
    }
    if (keyword.length > 0) {
      const keywordClause = ` (y.payor LIKE '%${keyword}%' OR
                              y.billing_email LIKE '%${keyword}%' OR
                              y.billing_full_name LIKE '%${keyword}%' OR
                              y.client_type LIKE '%${keyword}%' OR
                              y.billing_phone LIKE '%${keyword}%' OR
                              y.payment_type LIKE '%${keyword}%' OR
                              y.client LIKE '%${keyword}%') `;
      if (whereClasue.length > 0) {
        whereClasue = whereClasue+` AND ${keywordClause} `;
      } else {
        whereClasue = ` WHERE ${keywordClause} `;
      }
    }
    try {
      return await query(sql+whereClasue+groupByClause);
    } catch (error) {
      throw error;
    }
  }

  static async getAccountDetail() {
    var sql =
      `SELECT 
        DATE_FORMAT(testevent.event_date, '%m/%d/%Y')  as date, 
        client, 
        billing_email, 
        therapist, 
        timestampdiff(MINUTE, start, end) as duration, 
        ((timestampdiff(MINUTE, start, end)/session_set_length) * session_cost) as actual_cost 
      FROM 
        testevent`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  /*   static async getAccountDetail2(selected) {
    var sql = `SELECT DATE_FORMAT(testevent.start, '%m/%d/%Y')  as date, client, billing_email, therapist, timestampdiff(MINUTE, start, end) as duration, ((timestampdiff(MINUTE, start, end)/session_set_length) * session_cost) as actual_cost from testevent  where billing_email = ?`;
    const { billingEmail } = selected;
    try {
      return await query(sql, [billingEmail]);
    } catch (error) {
      throw error;
    }
  } */

  static async getAccountDetail2() {
    var sql = `SELECT DATE_FORMAT(x.event_date, '%m/%d/%Y') as date, x.description,  x.client, x.session_cost, x.amount,  SUM(y.bal) balance FROM(SELECT *, session_cost-amount bal FROM testevent WHERE billing_email = 'bjoe@mail.com') x JOIN (SELECT *, session_cost-amount bal FROM testevent WHERE billing_email = 'bjoe@mail.com') y ON y.event_date <= x.event_date GROUP BY x.id ORDER BY x.event_date DESC`;
    // const { billingEmail } = selected;
    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getAccountDetailByBE(param) {
    const {
      bEmail,
      startDate,
      endDate
    } = param;
    const sql = `SELECT 
                  DATE_FORMAT(x.event_date, '%m/%d/%Y') as date, x.description,  
                  x.client, 
                  x.session_cost, 
                  x.amount,  
                  SUM(y.bal) 
                  balance 
                FROM 
                  (SELECT *, session_cost-amount bal FROM testevent WHERE billing_email = '${bEmail}') x 
                  JOIN (SELECT *, session_cost-amount bal FROM testevent WHERE billing_email = '${bEmail}') y 
                ON 
                  y.event_date <= x.event_date `;
    const groupOrderByClause = ` GROUP BY 
                                x.id 
                              ORDER BY 
                                x.event_date DESC `;
    let whereClasue = ``;
    if (startDate.length > 0) {
      whereClasue = ` WHERE '${startDate}' <= x.event_date `;
    }
    if (endDate.length > 0) {
      if (whereClasue.length > 0) {
        whereClasue = whereClasue+` AND x.event_date <= '${endDate}' `;
      } else {
        whereClasue = ` WHERE x.event_date <= '${endDate}' `;
      }
    }
    // const { billingEmail } = selected;
    try {
      return await query(sql+whereClasue+groupOrderByClause);
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
}

//export default AccountInvService;
module.exports = AccountInvService;
