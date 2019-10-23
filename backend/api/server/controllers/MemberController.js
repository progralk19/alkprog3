import MemberService from "../services/MemberService";
import Util from "../utils/Utils";
//test comment
const util = new Util();

class MemberController {
  static async getAllMembers(req, res) {
    try {
      const allMembers = await MemberService.getAllMembers();
      if (allMembers.length > 0) {
        util.setSuccess(200, "Members retrieved", allMembers);
      } else {
        util.setSuccess(200, "No member found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getActiveTherapists(req, res) {
    try {
      const therapists = await MemberService.getActiveTherapists();
      if (therapists.length > 0) {
        util.setSuccess(200, "Active therapists retrieved", therapists);
      } else {
        util.setSuccess(200, "No active therapist found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addMember(req, res) {
    const newOne = req.body;
    try {
      const createdOne = await MemberService.addOne(newOne);
      util.setSuccess(201, "Member Added!", createdOne);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default MemberController;
