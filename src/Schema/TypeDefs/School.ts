import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat} from "graphql";

export const SchoolType = new GraphQLObjectType({
    name: "School",
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        longitude: {type: GraphQLFloat},
        latitude: {type: GraphQLFloat},
        imageLink: {type: GraphQLString},
    })
})