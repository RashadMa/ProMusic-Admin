import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";
import informationListReducer from "./informationListReducer";
import brandListReducer from "./brandListReducer";
import settingListReducer from "./settingListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import subCategoryListReducer from "./subCategoryListReducer";
import authReducer from "./authReducer"
import orderListReducer from "./orderListReducer";

const rootReducer = combineReducers({
  authReducer,
  ThemeReducer,
  categoryListReducer,
  sliderListReducer,
  productListReducer,
  informationListReducer,
  brandListReducer,
  settingListReducer,
  changeCategoryReducer,
  subCategoryListReducer,
  orderListReducer,
});

export default rootReducer;
