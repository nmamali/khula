import {GraphQLFloat, GraphQLID, GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {SchoolType} from "../TypeDefs/School";
import {Schools} from "../../Entities/Schools";
import {deleteByIdInterface} from "../TypeDefs/DeleteByIdInterface";

export const CREATE_SCHOOL = {
    type: SchoolType,
    args: {
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        imageLink: {type: GraphQLString},
        latitude: {type: GraphQLFloat},
        longitude: {type: GraphQLFloat}
    },
    async resolve(parent: string, args: any){
        const {name, address, imageLink, latitude, longitude} = args;
        // check if all the fields are populated
        if(name && address && imageLink && latitude && longitude){
            await Schools.insert(args)
                .then(()=>{
                    return args
                })
                .catch((err)=>{
                    return err?.message
                })
        } else{
             throw new Error("Enter all the required fields")
        }
    }
}

export const DELETE_SCHOOL = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: string, args: deleteByIdInterface){
        const {id} = args;
        if(id){
            await Schools.delete({id: id})
            return {successful: true, message: "DELETED SUCCESSFULLY"}
        } else{
            throw new Error("ID is required")
        }
    }
}