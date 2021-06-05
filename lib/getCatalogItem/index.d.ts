import { ApolloQueryResult } from 'apollo-client';
import { CatalogItemResponse, CatalogItemSearch } from './../types/api';
declare const getCatalogItem: (search: CatalogItemSearch) => Promise<ApolloQueryResult<CatalogItemResponse>>;
export default getCatalogItem;
