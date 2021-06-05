import { CartMutationResponse } from './../types/api';
import { CreateCartParams } from './../types/interfaces';
declare const createCart: (input: CreateCartParams) => Promise<CartMutationResponse>;
export default createCart;
