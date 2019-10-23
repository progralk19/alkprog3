import { query } from "./connection";

class TemplateService {
  static async getAll() {
    const sql = "SELECT * FROM templates";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
}

export default TemplateService;
