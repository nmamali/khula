import {GraphQLBoolean, GraphQLFloat, GraphQLObjectType, GraphQLString} from "graphql";

export interface SchoolInterface {
    name: typeof GraphQLString,
    address: typeof GraphQLString,
    imageLink: typeof GraphQLString,
    latitude: typeof GraphQLFloat,
    longitude: typeof GraphQLFloat
}