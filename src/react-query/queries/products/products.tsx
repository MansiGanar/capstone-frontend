import axios from "axios";
import { GET_ALL_PRODUCTS_URL } from "../../../utils/paths/paths";
import { GetAllProductsResponse } from "./types";

export const getAllProducts = async (): Promise<GetAllProductsResponse> => {
  const { data } = await axios.get(GET_ALL_PRODUCTS_URL);
  return data;
};
