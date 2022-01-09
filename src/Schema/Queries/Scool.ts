import {SchoolType} from "../TypeDefs/School";
import {GraphQLList} from "graphql";
import {Schools} from "../../Entities/Schools";

export const GET_ALL_SCHOOLS ={
    type: new GraphQLList(SchoolType) ,// list of schools
    resolve(){
        return Schools.find()
    }
}