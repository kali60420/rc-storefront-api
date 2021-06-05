import { CartMutationResponse } from "./../types/api";
import { PlaceOrderParams } from './../types/interfaces';
declare const placeOrder: (input: PlaceOrderParams) => Promise<CartMutationResponse>;
export default placeOrder;
