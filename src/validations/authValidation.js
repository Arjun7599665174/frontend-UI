export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export const validateStrongPassword = (password) => {
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(password)) return "Password must contain one uppercase letter";
  if (!/[a-z]/.test(password)) return "Password must contain one lowercase letter";
  if (!/[0-9]/.test(password)) return "Password must contain one number";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return "Password must contain one special character";
  if (/\s/.test(password)) return "Password must not contain spaces";

  return "";
};

export const loginValidation = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const registerValidation = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!formData.mobile.trim()) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9][0-9]{9}$/.test(formData.mobile.trim())) {
    errors.mobile = "Please enter a valid 10 digit Indian mobile number";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else {
    const passwordError = validateStrongPassword(formData.password);
    if (passwordError) errors.password = passwordError;
  }

  return errors;
};