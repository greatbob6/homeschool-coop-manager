import { PhoneNumber } from "./PhoneNumber";

export interface Parent {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  spouse_name: string;
  phone: PhoneNumber;
  gender: string;

  password: string;
  
  family_id: string;
}
