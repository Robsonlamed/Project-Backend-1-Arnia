// import dotenv from "dotenv";
// import express from "express";
// import { mongoConnect } from "./db/mongo.connection";

// mongoConnect();
// const app = express();
// app.use(express.json());
// app.use();
// app.listen(4000, () => console.log("Server is running on port 4000"));

import { config } from 'dotenv'
config()
import express from 'express' 
import { booksRoutes } from './books/routes/books.routes'
import { connectMongo } from './db/mongo.connection'
import { reviewsRoutes } from './reviews/routes/reviews.routes'

connectMongo()

const app = express()
const port = 5555

app.use(express.json())

app.use("/books", booksRoutes)
app.use("/books/:books_id/reviews", reviewsRoutes)
app.listen(port, () => console.log('listening on port ' + port))
 