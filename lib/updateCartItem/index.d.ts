import { CartMutationResponse } from './../types/api';
import { UpdateCartItemParams } from './../types/interfaces';
declare const updateCartItem: (input: UpdateCartItemParams) => Promise<CartMutationResponse>;
export default updateCartItem;
