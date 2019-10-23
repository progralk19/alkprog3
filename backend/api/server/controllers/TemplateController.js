import TemplateService from "../services/TemplateService";
import Util from "../utils/Utils";

const util = new Util();

class TemplateController {
  static async getAllTemplates(req, res) {
    try {
      const allTemplates = await TemplateService.getAll();
      if (allTemplates.length > 0) {
        util.setSuccess(200, "Templates retrieved", allTemplates);
      } else {
        util.setSuccess(200, "No Templates found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default TemplateController;
