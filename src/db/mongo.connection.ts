import { connect, connection } from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const mongoConnect = process.env.MONGO as string

export function connectMongo() {
    connection
        .once('error', (error) => {
            // console.log('erro ao conectar ' + error)
        })
        .once('close', () => {
            // console.log('sem conexão')
        }) 
        .once('open', () => {
            // console.log('conectado ')
        })
        connect(mongoConnect)
}

export async function mongoDisconnect() {
    // console.log("Closing MongoDB connection");
    connection.close();
}