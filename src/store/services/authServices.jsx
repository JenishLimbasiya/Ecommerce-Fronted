import { LOGIN } from "../../api/endPoints";
import instance from "../../hooks/axios";

const login = (data) => {
  return instance.post(LOGIN, {
    email: data?.email,
    password: data?.password,
  });
};

const authServices = {
  login,
};

export default authServices;
