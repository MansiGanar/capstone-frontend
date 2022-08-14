import axios from "axios";
import { useMutation } from "react-query";
import { PLACE_AN_ORDER_URL } from "../../../utils/paths/paths";
import { PlaceAnOrderPayload } from "./types";

export const usePlaceAnOrderMutation = (token: string) => {
  return useMutation(async (formData: PlaceAnOrderPayload) => {
    await axios.post(PLACE_AN_ORDER_URL, formData, {
      headers: { "auth-token": token },
    });
  });
};
