import { UserMutationResponse } from "./../types/api";
import { UpdateAccountParams } from './../types/interfaces';
declare const updateAccount: (input: UpdateAccountParams) => Promise<UserMutationResponse>;
export default updateAccount;
