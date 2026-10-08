export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export const isValidEmail = (email) => EMAIL_REGEX.test(email);

export const isValidPassword = (password) => PASSWORD_REGEX.test(password);
