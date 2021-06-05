import { ApolloQueryResult } from "apollo-client";
import { TagResponse, TagSearch } from "./../types/api";
declare const getTags: (search: TagSearch) => Promise<ApolloQueryResult<TagResponse>>;
export default getTags;
