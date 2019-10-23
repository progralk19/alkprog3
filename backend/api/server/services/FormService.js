import { query } from "./connection";

class FormService {
  static async getAllForms() {
    const sql = "SELECT * FROM forms";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
}

export default FormService;
