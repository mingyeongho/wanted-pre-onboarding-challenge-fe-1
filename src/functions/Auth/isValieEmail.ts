const isValieEmail = (email: string) => {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
};

export default isValieEmail;
