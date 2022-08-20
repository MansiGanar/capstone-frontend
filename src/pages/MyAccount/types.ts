import {
  GetOrderHistoryResponse,
  GetUserDetailsResponse,
  OrderHistoryItem,
} from "../../react-query/queries/user/types";

export interface IPersonalDetailsProps {
  refetch: any;
  token: string | null;
  userDetailsData?: GetUserDetailsResponse;
}

export interface IOrderHistoryProps {
  orderHistoryData?: GetOrderHistoryResponse;
}

export interface IOrderHistoryTableProps {
  orderHistoryData?: GetOrderHistoryResponse;
}

export interface IOrderHistoryTableRowProps {
  orderDetails: OrderHistoryItem;
}
