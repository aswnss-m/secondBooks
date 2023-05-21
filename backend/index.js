const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());

// Connecting to the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongoose Connection established");
});

const loginRouter = require('./routers/login');
const registerUser = require("./routers/register");
const userRouter = require("./routers/user");
const booksRouter = require("./routers/books");

app.use('/',booksRouter);
app.use('/login',loginRouter);
app.use('/register',registerUser);
app.use('/users',userRouter);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});