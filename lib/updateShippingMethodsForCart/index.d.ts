import { CartMutationResponse } from "./../types/api";
import { UpdateFulfillmentParams } from './../types/interfaces';
declare const setShippingAddressToCart: (params: UpdateFulfillmentParams) => Promise<CartMutationResponse>;
export default setShippingAddressToCart;
