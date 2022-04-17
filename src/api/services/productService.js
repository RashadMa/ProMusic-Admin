import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllProducts() {
    return this.get("products");
  }

  putProduct(product, id, headers) {
    return this.put("products", product, id, headers);
  }

  deleteProduct(id) {
    return this.delete("products", id);
  }

  postProduct(product) {
    return this.post("products");
  }
}

export const productService = new ProductService();
