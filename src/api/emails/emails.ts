import axios from "axios";
import {
  SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL,
  SEND_PASSWORD_RESET_EMAIL_USER_URL,
} from "../../utils/paths/paths";
import {
  ISendNewsletterSignupEmail,
  ISendPasswordResetEmail,
  SendEmailResponse,
} from "./types";

export const sendNewsletterSignupEmail = async (
  formData: ISendNewsletterSignupEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(
    SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL,
    formData
  );
  return data;
};

export const sendPasswordResetEmail = async (
  formData: ISendPasswordResetEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(
    SEND_PASSWORD_RESET_EMAIL_USER_URL,
    formData
  );
  return data;
};
