import { ApolloQueryResult } from "apollo-client";
import { UserOrderQueryResponse } from "./../types/api";
import { GetOrdersByAccountIdParams } from './../types/interfaces';
declare const getOrdersByAccountId: (params: GetOrdersByAccountIdParams) => Promise<ApolloQueryResult<UserOrderQueryResponse>>;
export default getOrdersByAccountId;
