// import { query } from "./connection";
var query = require("./connection");

class ClientService {
  static async getAllClients() {
    const sql = "SELECT * FROM clients";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async addOne(newOne) {
    const sql =
      "INSERT INTO clients (active, title, client_full_name, client_first_name, client_last_name, client_type, phone, street_address, email, assi_therapist_full_name, facility, session_type, session_cost, session_length, bday, password, confirm_password, notes, city, state, zip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    /*  "INSERT INTO clients (active, title, client_full_name, client_first_name, client_last_name, client_type, phone, street_address, email, assi_therapist_full_name, facility, session_type, session_cost, session_length, bday, password, confirm_password, notes, city, state, zip, contact_title, contact_first_name, contact_last_name, contact_street_address, contact_city, contact_state, contact_zip, contact_email, contact_phone, contact_secondary_phone, billing_first_name, billing_last_name, billing_full_name, payment_type, card_type, card_num, card_exp_date, cvv, billing_street_address, name_on_card, billing_city, billing_state, billing_email, billing_phone, billing_zip, contact2_active, contact_title_2, contact_first_name_2, contact_last_name_2, contact_street_address_2, contact_city_2, contact_state_2, contact_zip_2, contact_email_2, contact_phone_2, contact_secondary_phone_2, contact3_active, contact_title_3, contact_first_name_3, contact_last_name_3, contact_street_address_3, contact_city_3, contact_state_3, contact_zip_3, contact_email_3, contact_phone_3, contact_secondary_phone_3, contact1_receive_email, contact2_receive_email, contact3_receive_email) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; */
    const {
      // client
      checkedActive,
      clientTitle,
      clientFullName,
      clientFirstName,
      clientLastName,
      clientType,
      clientPhone,
      clientAddress,
      clientEmail,
      therapist,
      clientFacility,
      sessionType,
      sessionCost,
      sessionLength,
      clientBday,
      clientCurrentPassword,
      clientConfirmPassword,
      clientNotes,
      clientCity,
      clientState,
      clientZipCode
      /*
      // contact
      contactTitle,
      contactFirstName,
      contactLastName,
      contactAddress,
      contactCity,
      contactState,
      contactZip,
      contactEmail,
      contactPhone,
      contact2ndPhone,
      // billing
      billingFirstName,
      billingLastName,
      billingFullName,
      paymentType,
      cardType,
      cardNum,
      expDate,
      cvv,
      billingAddress,
      nameOnCard,
      billingCity,
      billingState,
      payorEmail,
      billingPhone,
      billingZip,
      // contact 2
      checkedContact2,
      contactTitle2,
      contactFirstName2,
      contactLastName2,
      contactAddress2,
      contactCity2,
      contactState2,
      contactZip2,
      contactEmail2,
      contactPhone2,
      contact2ndPhone2,
      // contact 3
      checkedContact3,
      contactTitle3,
      contactFirstName3,
      contactLastName3,
      contactAddress3,
      contactCity3,
      contactState3,
      contactZip3,
      contactEmail3,
      contactPhone3,
      contact2ndPhone3,
      // receieve email
      contactRecEmail,
      contact2RecEmail,
      contact3RecEmail
      */
    } = newOne;
    try {
      return await query(sql, [
        // client
        checkedActive,
        clientTitle,
        clientFullName,
        clientFirstName,
        clientLastName,
        clientType,
        clientPhone,
        clientAddress,
        clientEmail,
        therapist,
        clientFacility,
        sessionType,
        sessionCost,
        sessionLength,
        clientBday,
        clientCurrentPassword,
        clientConfirmPassword,
        clientNotes,
        clientCity,
        clientState,
        clientZipCode
        /*
        // contact
        contactTitle,
        contactFirstName,
        contactLastName,
        contactAddress,
        contactCity,
        contactState,
        contactZip,
        contactEmail,
        contactPhone,
        contact2ndPhone,
        // billing
        billingFirstName,
        billingLastName,
        billingFullName,
        paymentType,
        cardType,
        cardNum,
        expDate,
        cvv,
        billingAddress,
        nameOnCard,
        billingCity,
        billingState,
        payorEmail,
        billingPhone,
        billingZip,
        // contact 2
        checkedContact2,
        contactTitle2,
        contactFirstName2,
        contactLastName2,
        contactAddress2,
        contactCity2,
        contactState2,
        contactZip2,
        contactEmail2,
        contactPhone2,
        contact2ndPhone2,
        // contact 3
        checkedContact3,
        contactTitle3,
        contactFirstName3,
        contactLastName3,
        contactAddress3,
        contactCity3,
        contactState3,
        contactZip3,
        contactEmail3,
        contactPhone3,
        contact2ndPhone3,
        // receieve email
        contactRecEmail,
        contact2RecEmail,
        contact3RecEmail
        */
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  static async getAllPayors() {
    let sql = "SELECT id, billing_full_name FROM clients";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    const sql = `DELETE FROM clients WHERE id = ${id}`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
}

// export default ClientService;
module.exports = ClientService;
