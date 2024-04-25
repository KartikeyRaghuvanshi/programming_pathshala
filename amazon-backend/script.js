const express = require('express');    //import express
const productsRouter = require('./routes/productsRoutes.js')
const app = express();   //to start the express
const test = require('./modules/productsModel.js')
const mongoose = require('mongoose');  //import mongoose

app.use(express.json());
app.use('/api/products',productsRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_password_$@cluster0.4gv9e5z.mongodb.net/$_DB_name_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'root';
const databasePassword= 'kashi';
const databaseName = 'amazon-backend';


let dbLink = url.replace("$_USERNAME_$",databaseUser);
    dbLink = dbLink.replace("$_password_$",databasePassword);
    dbLink = dbLink.replace("$_DB_name_$",databaseName);

mongoose.connect(dbLink)
    .then(() => console.log('----------Connected!----------------'));


app.listen(1400,
    ()=>console.log('------------app started------------')
);

