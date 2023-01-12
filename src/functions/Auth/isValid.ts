import isValidPw from "./isValidPw";
import isValieEmail from "./isValieEmail";

const isValid = (email: string, password: string) => {
  return isValieEmail(email) && isValidPw(password) ? true : false;
};

export default isValid;
