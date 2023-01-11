const isPwValid = (password: string): boolean => {
  return password.length > 7 ? true : false;
};

export default isPwValid;
