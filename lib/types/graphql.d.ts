export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Long` scalar type represents non-fractional signed whole numeric values.
     * Long can represent values between -(2^63) and 2^63 - 1.
     */
    Long: any;
    /** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
    DateTime: any;
    /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
    Country: any;
    /** Locale is a scalar value represented as a string language tag. */
    Locale: any;
    /** DateTime is a scalar value that represents an ISO8601 formatted date. */
    Date: any;
    /** Raw JSON value */
    Json: any;
    /** Represents a currency. Currencies are identified by their [ISO
     * 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes.
     */
    Currency: any;
    /** A key that references a resource. */
    KeyReferenceInput: any;
    /** Search filter. It is represented as a string and has th same format as in REST API: "field:filter_criteria" */
    SearchFilter: any;
    /** Search sort */
    SearchSort: any;
    /** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
    YearMonth: any;
    /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
    BigDecimal: any;
    /** Time is a scalar value that represents an ISO8601 formatted time. */
    Time: any;
    /** Cursor is a scalar value that represents an string of the current item location */
    ConnectionCursor: any;
    /** Money type object */
    Money: any;
    /** Any object structure */
    Any: any;
};
export declare type Metafield = {
    __typename?: "Metafield";
    key: Scalars["String"];
    namespace?: Scalars["String"];
    description?: Scalars["String"];
    scope?: Scalars["String"];
    value: Scalars["String"];
    valueType?: Scalars["String"];
};
export declare type Currency = {
    __typename?: "Currency";
    code: Scalars["String"];
};
export declare type Price = {
    __typename?: "Price";
    displayPrice: Scalars["String"];
    currency: Currency;
    minPrice: Scalars["Float"];
    maxPrice: Scalars["Float"];
};
export declare type CatalogProduct = {
    __typename?: "CatalogProduct";
    _id: Scalars["ID"];
    barcode: Scalars["String"];
    createdAt: Scalars["DateTime"];
    description: Scalars["String"];
    height: Scalars["Float"];
    isDeleted: Scalars["Boolean"];
    isVisible: Scalars["Boolean"];
    length: Scalars["Float"];
    metaDescription: Scalars["String"];
    metafields: [Metafield];
    minOrderQuantity: Scalars["Int"];
    originCountry: Scalars["String"];
    pageTitle: Scalars["String"];
    productId: Scalars["ID"];
    productType: Scalars["String"];
    shop: Shop;
    sku: Scalars["String"];
    slug: Scalars["String"];
    title: Scalars["String"];
    pricing: Price[];
    updatedAt: Scalars["DateTime"];
    variants: [CatalogProductVariant];
    vendor: Scalars["String"];
    weight: Scalars["Float"];
    width: Scalars["Float"];
    images: Scalars["Any"];
};
export declare type CatalogProductVariant = {
    __typename?: "CatalogProductVariant";
    _id: Scalars["ID"];
    sku: Scalars["String"];
    optionTitle: Scalars["String"];
    minOrderQuantity: Scalars["Int"];
    title: Scalars["String"];
    variantId: Scalars["String"];
    isSoldOut: Scalars["Boolean"];
    isBackorder: Scalars["Boolean"];
    inventoryInStock: Scalars["Int"];
    inventoryAvailableToSell: Scalars["Int"];
    pricing: Price[];
    cloudinary: Scalars["Any"];
};
export declare type Shop = {
    __typename?: "Shop";
    _id: Scalars["ID"];
    allowGuestCheckout: Scalars["Boolean"];
    currency: Scalars["Currency"];
    defaultNavigationTreeId: Scalars["String"];
    description: Scalars["String"];
    keywords: Scalars["String"];
    language: Scalars["String"];
    name: Scalars["String"];
    slug: Scalars["String"];
    timezone: Scalars["String"];
};
export declare type PageInfo = {
    startCursor: Scalars["ConnectionCursor"];
    endCursor: Scalars["ConnectionCursor"];
    hasNextPage: Scalars["Boolean"];
    hasPreviousPage: Scalars["Boolean"];
};
export declare type Product = {
    __typename?: "CatalogItemProduct";
    _id: Scalars["ID"];
    product: CatalogProduct;
    shop: Shop;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
};
export declare type CatalogItemConnection = {
    edges: [CatalogItemEdge];
    nodes: [Product];
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};
export declare type CatalogItemEdge = {
    cursor: Scalars["ConnectionCursor"];
    node: Product;
};
export declare type TagItemConnection = {
    edges: [TagItemEdge];
    nodes: [Tag];
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};
export declare type CartItemEdge = {
    cursor: Scalars["ConnectionCursor"];
    node: CartItem;
};
export declare type CartItem = {
    __typename?: "CartItem";
    _id: Scalars["ID"];
    addedAt: Scalars["DateTime"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    title: Scalars["String"];
    variantTitle: Scalars["String"];
    optionTitle: Scalars["String"];
    productSlug: Scalars["String"];
    productConfiguration: Scalars["Any"];
    inventoryAvailableToSell: Scalars["Int"];
    quantity: Scalars["Int"];
    tax: Scalars["Money"];
    price: Scalars["Money"];
    priceWhenAdded: Scalars["Money"];
    subtotal: Scalars["Money"];
    metafields: Scalars["Any"];
};
export declare type CartItemConnection = {
    edges: [CartItemEdge];
    nodes: [CartItem];
    pageInfo: PageInfo;
    totalCount: Scalars["Int"];
};
export declare type TagItemEdge = {
    cursor: Scalars["ConnectionCursor"];
    node: Tag;
};
export declare type Tag = {
    _id: Scalars["ID"];
    slug: Scalars["String"];
    name: Scalars["String"];
    displayTitle: Scalars["String"];
    isVisible: Scalars["Boolean"];
    isTopLevel: Scalars["Boolean"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    subTags: Scalars["Any"];
};
export declare type FilterItemEdge = {
    cursor: Scalars["ConnectionCursor"];
    node: Filter;
};
export declare type Filter = {
    _id: Scalars["ID"];
    name: Scalars["String"];
    fieldname: Scalars["String"];
    visible: Scalars["Boolean"];
    multiselect: Scalars["Boolean"];
    categories: [FilterCategory];
};
export declare type FilterCategory = {
    label: Scalars["String"];
    value: Scalars["String"];
};
export declare type MetafieldFilter = {
    key: Scalars["String"];
    options: [FilterOption];
};
export declare type FilterOption = {
    key: Scalars["String"];
    value: Scalars["String"];
    description: Scalars["String"];
};
export declare type PartnerEdge = {
    cursor: Scalars["ConnectionCursor"];
    node: Partner;
};
export declare type Partner = {
    _id: Scalars["ID"];
    shopId: Scalars["String"];
    region: Scalars["String"];
    area: Scalars["String"];
    type: Scalars["String"];
    name: Scalars["String"];
    street: Scalars["String"];
    postalcode: Scalars["String"];
    city: Scalars["String"];
    phone: Scalars["String"];
    email: Scalars["String"];
};
