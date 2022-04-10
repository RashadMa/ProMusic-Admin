import { HttpClient } from "../HttpClient";

class SettingService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllSettings() {
    return this.get("settings");
  }

  putSetting(setting, id) {
    return this.put("settings", setting, id);
  }
}

export const settingService = new SettingService();
