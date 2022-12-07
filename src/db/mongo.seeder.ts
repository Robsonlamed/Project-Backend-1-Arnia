import "./seeder/books.seeder";
import { seeder } from "./seeder/books.seeder";
import { connectMongo, mongoDisconnect } from "./mongo.connection";

(async () => {
    connectMongo()
    await seeder()
    mongoDisconnect()
})() 
