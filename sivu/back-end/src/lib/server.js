'use strict'

//importing these packages, so that we can use them
// import cors from 'cors';
// import express from 'express'; Cannot use import statement outside a module, therefore turn it into a variable :) 
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
const cors=require('cors'); // ^^like dis :) 
const express=require('express');
const mongoose=require('mongoose'); 

require('dotenv').config();
//we are creating instances of express and router
const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sivu';

//connecting to mongoose
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.once('open',()=>{
  console.log('MongoDB database connection established successfully');
});
//for them to work, we have to use them as well
app.use(cors());
app.use(express.json());

// app.use(require('../route/auth-router'));
const productsRouter=require('../routes/products');
const userRouter=require('../routes/users');

// error middleware
// app.use(require('./error-middleware'));

app.use('/products',productsRouter);
app.use('/users',userRouter);

app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

app.listen(PORT, () =>{
  console.log(`Listening on port: ${PORT}`)
})

//exporting the response
const start = () => {
  app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
  })
}

const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`)
  })
}