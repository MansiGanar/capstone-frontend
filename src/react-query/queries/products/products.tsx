import axios from "axios";
import { useQuery } from "react-query";
import {
  GET_ALL_PRODUCTS_QUERY_KEY,
  GET_ALL_PRODUCTS_BY_CATEGORY_QUERY_KEY,
} from "../../../utils/keys/keys";
import {
  GET_ALL_PRODUCTS_URL,
  GET_ALL_PRODUCTS_BY_CATEGORY_URL,
} from "../../../utils/paths/paths";
import { commonQueryConfig } from "../utils";
import { GetAllProductsResponse } from "./types";

export const useGetAllProductsQuery = () => {
  const apiQuery = async (): Promise<GetAllProductsResponse> => {
    const { data } = await axios.get(GET_ALL_PRODUCTS_URL);
    return data;
  };

  return useQuery(GET_ALL_PRODUCTS_QUERY_KEY, apiQuery, commonQueryConfig);
};

export const useGetAllProductsByCategoryQuery = (
  category: string,
  enabled: boolean
) => {
  const apiQuery = async (
    category: string
  ): Promise<GetAllProductsResponse> => {
    const { data } = await axios.get(
      `${GET_ALL_PRODUCTS_BY_CATEGORY_URL}${category}`
    );
    return data;
  };

  return useQuery(
    [GET_ALL_PRODUCTS_BY_CATEGORY_QUERY_KEY, category],
    () => apiQuery(category),
    { ...commonQueryConfig, enabled }
  );
};
