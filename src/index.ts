import express from "express";
import {graphqlHTTP} from "express-graphql";
import cors from "cors"
import {createConnection} from "typeorm";
import {schema} from "./Schema";
import {Schools} from "./Entities/Schools";
const main = async ()=>{
    await createConnection({
        type: "mysql",
        database: "KhulaSchools",
        username: "root",
        password: "password",
        logging: true,
        synchronize: false,
        entities: [Schools],
    })
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(3001, ()=>{
        console.log("server is up and running on port 3001")
    })
}
main().catch(err=>{
    console.log("Something went wrong", err.message)
})
