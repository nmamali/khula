import {GraphQLFloat, GraphQLID, GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {SchoolType} from "../TypeDefs/School";
import {Schools} from "../../Entities/Schools";

export const CREATE_SCHOOL = {
    type: SchoolType,
    args: {
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        imageLink: {type: GraphQLString},
        latitude: {type: GraphQLFloat},
        longitude: {type: GraphQLFloat}
    },
    async resolve(parent: any, args: any){
        await Schools.insert(args)
        return args

    }
}

export const DELETE_SCHOOL = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any){
        const {id} = args;
        await Schools.delete({id: id})
        return {successful: true, message: "DELETED SUCCESSFULLY"}

    }
}