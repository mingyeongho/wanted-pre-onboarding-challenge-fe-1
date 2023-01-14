/**
 * 8자 이상 입력
 */
const isPasswordValid = ({ password }: { password: string }) => {
  return password.length >= 8 ? true : false;
};

export default isPasswordValid;
