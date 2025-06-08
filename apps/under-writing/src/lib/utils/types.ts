export type BusinessAddress = {
  address: string;
  state: string;
  town: string;
};

export type ResidentialDetails = {
  address: string;
  state: string;
  town: string;
};

export type PersonalDetails = {
  bvn_number: string;
  date_of_birth: string;
  email_address: string;
  first_name: string;
  gender: string;
  highest_education_level: string;
  marital_status: string;
  middle_name: string;
  mobile_number: string;
  no_of_dependant: number;
  residential_details: ResidentialDetails;
  sur_name: string;
  title: string;
};

export type BusinessDetails = {
  business_address: BusinessAddress;
  business_type: string;
  industry: string;
  name: string;
  registration_number: string;
};

export type Documents = {
  bank_statement: string;
};

export type LoanData = {
  business_details: BusinessDetails;
  created_at: string;
  documents: Documents;
  employment_details: null;
  id: number;
  loan_type: string;
  owner: number;
  personal_details: PersonalDetails;
  state: 'in_progress' | 'completed';
};
