import { HttpClient } from "../HttpClient";

class SubCategoryService extends HttpClient {
  constructor() {
    super("https://localhost:5001/admin/api");
  }

  getAllSubCategories() {
    return this.get("subCategories");
  }

  putSubCategory(subCategory, id) {
    return this.put("subCategories", subCategory, id);
  }

  deleteSubCategory(id) {
    return this.delete("subCategories", id);
  }

  postSubCategory(subCategory) {
    return this.post("subCategories");
  }
}

export const subCategoryService = new SubCategoryService();
