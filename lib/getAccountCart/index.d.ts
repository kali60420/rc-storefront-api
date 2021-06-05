import { ApolloQueryResult } from "apollo-client";
import { CartQueryResponse } from "./../types/api";
import { GetAccountCartParams } from './../types/interfaces';
declare const getAccountCart: (params: GetAccountCartParams) => Promise<ApolloQueryResult<CartQueryResponse>>;
export default getAccountCart;
