import * as Yup from 'yup';

export const riskSchema = Yup.object().shape({
  loan_type: Yup.string().required('Loan type is required'),
  title: Yup.string().required('Title is required'),
  first_name: Yup.string().required('First name is required'),
  middle_name: Yup.string().required('Middle name is required'),
  sur_name: Yup.string().required('Surname is required'),
  date_of_birth: Yup.string().required('Date of birth is required'),
  bvn_number: Yup.string().required('BVN number is required'),
  mobile_number: Yup.string().required('Mobile number is required'),
  email_address: Yup.string().required('Email address is required'),
  gender: Yup.string().required('Gender is required'),
  marital_status: Yup.string().required('Marital status is required'),
  no_of_dependant: Yup.number().required('Number of dependents is required'),
  highest_education_level: Yup.string().required(
    'Highest level of education is required'
  ),
  residential_address: Yup.string().required('Residential address is required'),
  residential_state: Yup.string().required('Residential state is required'),
  residential_town: Yup.string().required('Residential town is required'),
  
  // Employment fields - only required for payday (personal) loans
  name_of_employer: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Name of employer is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  employment_type: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Employment type is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  employer_industry: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Employer industry is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  employer_address: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Employer address is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  employer_state: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Employer state is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  employer_town: Yup.string().when('loan_type', {
    is: 'payday',
    then: (schema) => schema.required('Employer town is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  
  // Business fields - only required for business loans
  business_name: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business name is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  registration_number: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Registration number is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  business_type: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business type is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  business_industry: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business industry is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  business_address: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business address is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  business_state: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business state is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  business_town: Yup.string().when('loan_type', {
    is: 'business',
    then: (schema) => schema.required('Business town is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  
  bank_statement: Yup.string().required('Bank statement is required'),
});