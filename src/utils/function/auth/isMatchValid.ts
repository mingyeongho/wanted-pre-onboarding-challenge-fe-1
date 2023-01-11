import isEmailValid from "./isEmailValid";
import isPwValid from "./isPwValid";

const isMatchValid = (email: string, password: string) => {
  return isEmailValid(email) && isPwValid(password) ? true : false;
};

export default isMatchValid;
