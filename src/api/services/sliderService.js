import { HttpClient } from "../HttpClient";

class SliderService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllSliders() {
    return this.get("sliders");
  }

  putSlider(slider, id) {
    return this.put("sliders", slider, id);
  }

  deleteSlider(id) {
    return this.delete("sliders", id);
  }

  postSlider(slider) {
    return this.post("sliders");
  }
}

export const sliderService = new SliderService();
