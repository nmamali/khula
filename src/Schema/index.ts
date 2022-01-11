import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {GET_ALL_SCHOOLS, GET_SCHOOLS_BY_IDS} from "./Queries/Scool";
import {CREATE_SCHOOL, DELETE_SCHOOL} from "./Mutations/School";
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
       getAllSchools: GET_ALL_SCHOOLS,
       getSchoolsByIds: GET_SCHOOLS_BY_IDS,
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createSchool: CREATE_SCHOOL,
        deleteSchool: DELETE_SCHOOL,
    }
})
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})