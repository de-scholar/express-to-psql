export const validateUser = (fname, email, username, password) => {
  if (fname.length === 0
    || email.length === 0
    || username.length === 0
    || password.length === 0) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  if (!email.includes('@')) {
    return false;
  }
  return true;
};
