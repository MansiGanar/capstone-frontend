import { Product } from "../../../react-query/queries/products/types";

export interface IProductsListItemProps {
  product: Product;
}

export interface IProductsListProps {
  setResults: React.Dispatch<React.SetStateAction<number>>;
}
