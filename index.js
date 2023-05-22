const express = require('express');
const port = 8000;
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message : "Server is running successfully"
    });
});

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to the server :${err}`);
    }
    console.log(`Server is up and running successfully on port :${port}`);
});