/**
 * `@와 .이 포함되어 있어야 한다.`
 */
const isEmailValid = ({ email }: { email: string }) => {
  const regex = /@.+\./;

  if (regex.test(email)) return true;
  return false;
};

export default isEmailValid;
