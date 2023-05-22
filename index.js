const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

const productRouter = require('./routers/product');
app.use('/',productRouter);

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to the server :${err}`);
    }
    console.log(`Server is up and running successfully on port :${port}`);
});