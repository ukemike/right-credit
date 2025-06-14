import * as Yup from 'yup';

const PASSWORD_REQUIRED = 'Password Required';
const FIRST_NAME_REQUIRED = 'First Name is Required';
const LAST_NAME_REQUIRED = 'Last Name is Required';

const emailYup = Yup.string()
  .email('Invalid Email')
  .required('Email is Required');

export const loginSchema = Yup.object().shape({
  email: emailYup,
  password: Yup.string().required(PASSWORD_REQUIRED),
});

export const signupSchema = Yup.object().shape({
  first_name: Yup.string().required(FIRST_NAME_REQUIRED),
  last_name: Yup.string().required(LAST_NAME_REQUIRED),
  email: emailYup,
  password: Yup.string().required(PASSWORD_REQUIRED),
  confirm_password: Yup.string()
    .required('Confirm Password is Required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  business_name: Yup.string().required('Business Name is Required'),
  // designation: Yup.string().required('Designation is Required'),
});

export const contactUsSchema = Yup.object().shape({
  email: emailYup,
  name: Yup.string().required('Name is Required'),
  subject: Yup.string().required('Subject is Required'),
  message: Yup.string().required('Message is Required'),
});

export const forgotSchema = Yup.object().shape({
  email: emailYup,
});

export const resetSchema = Yup.object().shape({
  newPassword: Yup.string().required('Password Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm Password Required'),
});

export const updateProfileSchema = Yup.object().shape({
  firstName: Yup.string().required(FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(LAST_NAME_REQUIRED),
  profileImage: Yup.string().required('Profile Image is required'),
});

export const changePasswordSchema = Yup.object().shape({
  otp: Yup.string().required('OTP is Required'),
  newPassword: Yup.string().required('Password is Required'),
});

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required(FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(LAST_NAME_REQUIRED),
  email: emailYup,
  password: Yup.string().required(PASSWORD_REQUIRED),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is Required')
    .matches(/^[0-9-]+$/, 'OTP must be a 6-digit number'),
});

export const newPasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old Password Required'),
  newPassword: Yup.string().required('New Password Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm Password Required'),
});

export const completeProfileSchema = Yup.object().shape({
  businessName: Yup.string().required('Business Name is Required'),
  businessRegistrationNumber: Yup.string().required(
    'Business Registration Number is Required'
  ),
  businessAddress: Yup.string().required('Business Address is Required'),
  countryOfIncorporation: Yup.string().required(
    'Country of Incorporation is Required'
  ),
  namesOfDirectors: Yup.array()
    .of(Yup.string().required('Director name is required'))
    .min(1, 'At least one director name is required')
    .required('Directors are required'),
});

export const dpoSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is Required'),
  address: Yup.string().required('Address is Required'),
  email: emailYup,
  phone: Yup.string().required('Phone is Required'),
});
