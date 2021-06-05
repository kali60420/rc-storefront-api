import { ApolloQueryResult } from 'apollo-client';
import { CartQueryResponse } from './../types/api';
import { GetCartParams } from './../types/interfaces';
declare const getCart: (params: GetCartParams) => Promise<ApolloQueryResult<CartQueryResponse>>;
export default getCart;
