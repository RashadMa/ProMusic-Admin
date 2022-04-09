import { HttpClient } from "../HttpClient";

class BrandsService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }
 
  getAllBrands() {
    return this.get("brands");
  }

  putBrand(brand, id) {
    return this.put("brands", brand, id)
  }

  deleteBrand(id) {
    return this.delete("Brands", id);
  }

  postBrand(brand) {
    return this.post("brand")
  }
}

export const brandsService = new BrandsService();