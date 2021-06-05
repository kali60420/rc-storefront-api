import { CartMutationResponse } from "./../types/api";
import { SelectFulfillmentParams } from './../types/interfaces';
declare const setShippingMethodToCart: (params: SelectFulfillmentParams) => Promise<CartMutationResponse>;
export default setShippingMethodToCart;
