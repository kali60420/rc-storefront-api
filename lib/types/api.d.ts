import { ApolloQueryResult } from "apollo-client";
import { FetchResult } from "apollo-link";
import { ProductVariant, Tags, Cart, User, UserOrder, PrimaryShopId, PaymentMethods, Filters, MetafieldFilters, Partners } from ".";
import { CatalogProduct, Partner } from "./graphql";
export interface CustomQuery {
    query: string;
    variables: any;
}
export interface BaseSearch {
    customQuery?: CustomQuery;
    limit?: number;
    offset?: number;
    sort?: string[];
    sortByField?: string;
}
export interface ProductFilter {
    fieldname: string;
    value?: string;
    list?: string[];
}
export interface ProductSearch extends BaseSearch {
    shopId: string;
    searchstring?: string;
    filter?: ProductFilter[];
    tagIds?: string[];
    offset?: number;
    first?: number;
    last?: number;
    before?: string;
    after?: string;
    currencyCode?: string;
}
export interface TagSearch extends BaseSearch {
    shopId: string;
    isTopLevel?: boolean;
    filter?: string;
    perPage?: number;
    page?: number;
    sort?: any;
    term?: any;
    filters?: any;
}
export interface CatalogItemSearch {
    shopId: string;
    slugOrId: string;
}
export interface BaseQueryParam {
    shopId: string;
}
export declare type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export declare type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export declare type ProductResponse = QueryResponse<"catalogItems", ProductVariant>;
export declare type CatalogItemResponse = QueryResponse<"catalogItemProduct", CatalogProduct>;
export declare type TagResponse = QueryResponse<"tags", Tags>;
export declare type CartMutationResponse = MutationResponse<"cart", Cart>;
export declare type CartQueryResponse = QueryResponse<"cart", Cart>;
export declare type PrimaryShopIdQueryResponse = QueryResponse<"primaryShopId", PrimaryShopId>;
export declare type PaymentMethodsResponse = QueryResponse<"availablePaymentMethods", PaymentMethods>;
export declare type FiltersQueryResponse = QueryResponse<"getFilters", Filters>;
export declare type MetafieldFiltersQueryResponse = QueryResponse<"metafieldFilters", MetafieldFilters>;
export declare type PartnersQueryResponse = QueryResponse<"getPartners", Partners>;
export declare type PartnerResponse = QueryResponse<"findPartner", Partner>;
export declare type UserQueryResponse = QueryResponse<"account", User>;
export declare type UserMutationResponse = MutationResponse<"account", User>;
export declare type UserOrderQueryResponse = QueryResponse<"ordersByAccountId", UserOrder>;
