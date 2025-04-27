export interface Student {
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: "Male" | "Female" | "Other"; // restrict to known values
  date_of_birth: string; // or Date, depending on how it's used
  address: string;
  phone_number: string;
}