import { HttpClient } from "../HttpClient";

class InfoService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllInfos() {
    return this.get("informations");
  }

  putInfo(info, id) {
    return this.put("informations", info, id);
  }

  deleteInfo(id) {
    return this.delete("informations", id);
  }

  postInfo(info) {
    return this.post("informations");
  }
}

export const infoService = new InfoService();
