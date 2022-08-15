import axios from "axios";
import { SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL } from "../../utils/paths/paths";
import {
  ISendNewsletterSignupEmail,
  SendNewsletterSignupEmailResponse,
} from "./types";

export const sendNewsletterSignupEmail = async (
  formData: ISendNewsletterSignupEmail
): Promise<SendNewsletterSignupEmailResponse> => {
  const { data } = await axios.post(
    SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL,
    formData
  );
  return data;
};
