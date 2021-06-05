import { ApolloClient } from "apollo-boost";
import { SetupConfig, ApiConfig } from "./types/setup";
import getCatalogItems from "./getCatalogItems";
import getCatalogItem from "./getCatalogItem";
import getPrimaryShopId from "./getPrimaryShopId";
import getTags from "./getTags";
import getCart from "./getCart";
import getAccountCart from "./getAccountCart";
import createCart from "./createCart";
import addToCart from "./addToCart";
import updateCartItem from "./updateCartItem";
import removeCartItems from "./removeCartItems";
import placeOrder from "./placeOrder";
import getAccount from "./getAccount";
import addCoupon from "./addCoupon";
import setShippingAddressToCart from "./setShippingAddressToCart";
import setShippingMethodToCart from "./setShippingMethodToCart";
import updateShippingMethodsForCart from "./updateShippingMethodsForCart";
import updateAccount from "./updateAccount";
import getOrdersByAccountId from "./getOrdersByAccountId";
import addAddressBookEntry from "./addAddressBookEntry";
import updateAddressBookEntry from "./updateAddressBookEntry";
declare let apolloClient: ApolloClient<any>;
declare let locale: string;
declare let currency: string;
declare let country: string;
declare let countries: any[];
declare let currencies: any[];
declare let locales: any[];
declare let api: ApiConfig;
declare let cookies: {
    currencyCookieName: string;
    countryCookieName: string;
    languageCookieName: string;
};
declare const fetchCachePolicy = "no-cache";
declare const setup: <TCacheShape>(setupConfig: SetupConfig<TCacheShape>) => ApolloClient<TCacheShape>;
export { apolloClient, fetchCachePolicy, api, setup, locale, locales, country, currency, countries, currencies, cookies, addAddressBookEntry, addCoupon, addToCart, createCart, getAccount, getAccountCart, getCart, getCatalogItem, getCatalogItems, getOrdersByAccountId, getPrimaryShopId, getTags, placeOrder, removeCartItems, setShippingAddressToCart, setShippingMethodToCart, updateAccount, updateAddressBookEntry, updateCartItem, updateShippingMethodsForCart };
