import {SchoolType} from "../TypeDefs/School";
import {GraphQLList, GraphQLString} from "graphql";
import {Schools} from "../../Entities/Schools";

export const GET_ALL_SCHOOLS ={
    type: new GraphQLList(SchoolType) ,// list of schools
    resolve(){
        return Schools.find()
    }
}

export const GET_SCHOOLS_BY_IDS ={
    type: new GraphQLList(SchoolType) ,// list of schools
    args: {
        ids: {type: new GraphQLList(GraphQLString)},
    },
    async resolve(parent: string, args: any){
        return Schools.findByIds(args.ids)
    }
}