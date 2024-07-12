import axiosClient from "./axiosClient";

const LoginApi = {
  loginEndpoint: (username, password) => {
    const url = "/auth/login";
    const payload = { username: username, password: password };
    return axiosClient.post(url, payload);
  },
};

export default LoginApi;
