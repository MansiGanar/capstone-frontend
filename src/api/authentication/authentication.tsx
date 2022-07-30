import axios from "axios";
import { REGISTER_USER_URL, LOGIN_USER_URL } from "../../utils/paths/paths";
import {
  IRegisterUser,
  RegisterUserResponse,
  ILoginUser,
  LoginUserResponse,
} from "./types";

export const registerUser = async (
  formData: IRegisterUser
): Promise<RegisterUserResponse> => {
  const { data } = await axios.post(REGISTER_USER_URL, formData);
  return data;
};

export const loginUser = async (
  formData: ILoginUser
): Promise<LoginUserResponse> => {
  const { data } = await axios.post(LOGIN_USER_URL, formData);
  return data;
};
