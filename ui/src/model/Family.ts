import { Address } from "./Address";
import { Contact } from "./Contact";
import { Student } from "./Student";
import { Parent } from "./Parent";

export interface Family {
  id: string;
  last_name: string;
  church: string;
  address: Address;
  emergency_contact: Contact;
  membership_status: string;
  notes: string;

  parents: Parent[];
  kids: Student[];
}
