import { regexValid } from "../constant";
import { ValidType } from "../type";

/**
 * true: enable
 * false: disable
 */
const valid = ({ email, pw }: ValidType): boolean => {
  //   if (regexValid.test(email) && pw.length >= 8) {
  //     return true;
  //   }
  if (email.includes("@") && email.includes(".") && pw.length >= 8) {
    return true;
  }
  return false;
};

export default valid;
