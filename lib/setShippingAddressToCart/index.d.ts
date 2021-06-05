import { CartMutationResponse } from "./../types/api";
import { SetAddressParams } from './../types/interfaces';
declare const setShippingAddressToCart: (params: SetAddressParams) => Promise<CartMutationResponse>;
export default setShippingAddressToCart;
