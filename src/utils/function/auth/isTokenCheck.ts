import { CONSTANT } from "../../constant";

const isTokenCheck = () => {
  return localStorage.getItem(CONSTANT.usersToken) ? true : false;
};

export default isTokenCheck;
