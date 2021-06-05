import { ApolloQueryResult } from "apollo-client";
import { UserQueryResponse } from "./../types/api";
import { GetUserParams } from './../types/interfaces';
declare const getAccount: (params: GetUserParams) => Promise<ApolloQueryResult<UserQueryResponse>>;
export default getAccount;
