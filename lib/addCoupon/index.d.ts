import { CartMutationResponse } from "./../types/api";
import { AddCouponParams } from './../types/interfaces';
declare const addToCart: (input: AddCouponParams) => Promise<CartMutationResponse>;
export default addToCart;
