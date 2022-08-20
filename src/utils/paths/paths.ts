export const BASE_URL =
  "https://e-commerce-backend-capstone.herokuapp.com/api/users/";
export const BASE_URL_WITHOUT_USER =
  "https://e-commerce-backend-capstone.herokuapp.com/api/";

export const REGISTER_USER_URL = BASE_URL + "register";
export const LOGIN_USER_URL = BASE_URL + "login";

export const GET_ALL_PRODUCTS_URL = BASE_URL + "products/all";
export const GET_ALL_PRODUCTS_BY_CATEGORY_URL = BASE_URL + "products/category/";
export const GET_PRODUCT_BY_ID_URL = BASE_URL + "products/product/";

export const PLACE_AN_ORDER_URL = BASE_URL + "orders";

export const SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL =
  BASE_URL_WITHOUT_USER + "emails/newsletter-signup";

export const GET_USER_DETAILS_URL = BASE_URL + "profile";
export const EDIT_PERSONAL_DETAILS_URL = BASE_URL + "edit";

export const GET_ORDER_HISTORY_URL = BASE_URL + "orders/all";
