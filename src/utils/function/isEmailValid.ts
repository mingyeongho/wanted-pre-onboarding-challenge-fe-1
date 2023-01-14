/**
 * `@와 .이 포함되어 있어야 한다.`
 */
const isEmailValid = ({ email }: { email: string }) => {
  /**
   * regex를 이용한 validation은 나중에 하기로 하자...
   */

  if (email.includes("@") && email.includes(".")) return true;
  return false;
};

export default isEmailValid;
