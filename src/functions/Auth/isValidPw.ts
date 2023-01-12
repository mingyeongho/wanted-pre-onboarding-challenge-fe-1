const isValidPw = (password: string) => {
  return password.length >= 8 ? true : false;
};

export default isValidPw;
