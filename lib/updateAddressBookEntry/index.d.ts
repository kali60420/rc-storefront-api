import { UserMutationResponse } from "./../types/api";
import { UpdateAddressParams } from './../types/interfaces';
declare const updateAddressBookEntry: (input: UpdateAddressParams) => Promise<UserMutationResponse>;
export default updateAddressBookEntry;
