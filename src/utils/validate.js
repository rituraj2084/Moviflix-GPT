export const checkValidateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  // const isNameValid = /([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name);
  // if (!isNameValid) return 'Name is not valid';
  if (!isEmailValid) return 'Email is not valid';
  if (!isPasswordValid) return 'Password is not valid';
  return null;
};
