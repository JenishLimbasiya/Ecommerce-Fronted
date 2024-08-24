const Constant = {
  BASE_URL: import.meta.REACT_APP_BASE_URL,
  REGEX: {
    EMAIL: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
  },

  LOCALSTORAGEKEYS: {
    ACCESSTOKEN: "accessToken",
    REFRESHTOKEN: "refreshToken",
  },

  ROLES: {
    USER: "USER",
    ADMIN: "ADMIN",
  },
};
export default Constant;
