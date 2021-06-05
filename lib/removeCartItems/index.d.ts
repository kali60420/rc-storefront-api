import { CartMutationResponse } from './../types/api';
import { RemoveCartItemParams } from './../types/interfaces';
declare const removeCartItems: (input: RemoveCartItemParams) => Promise<CartMutationResponse>;
export default removeCartItems;
