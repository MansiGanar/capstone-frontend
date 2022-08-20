import { Box } from "@mui/material";
import React from "react";
import Loader from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import {
  useGetOrderHistoryQuery,
  useGetUserDetailsQuery,
} from "../../react-query/queries/user/user";
import OrderHistory from "./OrderHistory/OrderHistory";
import PersonalDetails from "./PersonalDetails/PersonalDetails";

const MyAccount = () => {
  const { token } = useIsUserLoggedIn();

  const {
    isLoading: isUserDetailsLoading,
    data: userDetailsData,
    refetch: refetchUserDetails,
  } = useGetUserDetailsQuery(token || "");
  const { isLoading: isOrderHistoryLoading, data: orderHistoryData } =
    useGetOrderHistoryQuery(token || "", true);

  return (
    <>
      <PageHeader title={"My Account"} />;
      <Box padding={"2rem 15rem"}>
        {isUserDetailsLoading || isOrderHistoryLoading ? (
          <Loader />
        ) : (
          <>
            <PersonalDetails
              userDetailsData={userDetailsData}
              refetch={refetchUserDetails}
            />
            <OrderHistory orderHistoryData={orderHistoryData} />
          </>
        )}
      </Box>
    </>
  );
};

export default MyAccount;
