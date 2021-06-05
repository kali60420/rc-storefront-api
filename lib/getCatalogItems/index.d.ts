import { ApolloQueryResult } from "apollo-client";
import { ProductResponse, ProductSearch } from "./../types/api";
declare const getCatalogItems: (search: ProductSearch) => Promise<ApolloQueryResult<ProductResponse>>;
export default getCatalogItems;
