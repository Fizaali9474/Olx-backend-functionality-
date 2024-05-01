/*import { express } from "express";

const app=express()

app.listen( 3001,()=>{
console.log('Server is Listening to 3001')
})*/


/*import express from 'express'
import routes from './routes/index.mjs'
import db from './config/db.mjs'

const app = express()

app.listen(3001, () => {
    console.log('Server is listening to 3001')
})

db.connection.once('open', () => {
    console.log('DB connected successfully!')
})

app.use(express.json()) //Backend ko batana ka tumhari bodies ki type JSON hogi

app.use('/', routes)

//Schema: DB Structure*/






/*
fetch('http://localhost:3001/products')
.then(res => res.json())
.then(res => console.log(res))
*/


//MERN Stack
//M = MongoDb (Database)
//E = Express (Framework jis ke through APIs banti hain)
//R = React (Frontend)
//N = Nodejs (Backend Environment)

import express from "express";
import routes from "./routes/index.mjs ";
import db from "./config/db.mjs";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials: true,
};

// parse json request
app.use(express.json());

app.use(cors(corsOptions));

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server is running  on port 3001");
});

db.connection.once("open", () => {
  console.log("DB connected successfully!");
});







