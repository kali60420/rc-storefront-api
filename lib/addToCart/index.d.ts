import { CartMutationResponse } from './../types/api';
import { AddToCartParams } from './../types/interfaces';
declare const addToCart: (input: AddToCartParams) => Promise<CartMutationResponse>;
export default addToCart;
