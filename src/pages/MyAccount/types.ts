import {
  GetOrderHistoryResponse,
  GetUserDetailsResponse,
  OrderHistoryItem,
} from "../../react-query/queries/user/types";

export interface IPersonalDetailsProps {
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
