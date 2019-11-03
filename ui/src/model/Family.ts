import { Address } from "./Address";
import { Contact } from "./Contact";

export interface Family {
  id: string;
  last_name: string;
  church: string;
  address: Address;
  emergency_contact: Contact;
  membership_status: string;
  notes: string;
}
