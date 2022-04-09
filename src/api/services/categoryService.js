import { HttpClient } from "../HttpClient";

class CategoryService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllCategories() {
    return this.get("categories");
  }

  putCategory(category, id) {
    return this.put("categories", category, id);
  }

  deleteCategory(id) {
    return this.delete("categories", id);
  }

  postCategory(category) {
    return this.post("categories");
  }
}

export const categoryService = new CategoryService();
