import isEmailValid from "./isEmailValid";
import isPasswordValid from "./isPasswordValid";

/**
 * EmailValid와 PasswordValid가 모두 true여야 true
 */
const isValid = ({ email, password }: { email: string; password: string }) => {
  return isEmailValid({ email }) && isPasswordValid({ password })
    ? true
    : false;
};

export default isValid;
