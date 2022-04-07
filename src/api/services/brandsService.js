import { HttpClient } from "../HttpClient";

class BrandsService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }
 
  getAllBrands() {
    return this.get("brands");
  }

  deleteBrand(id) {
    return this.delete("Brands", id);
  }
}

export const brandsService = new BrandsService();