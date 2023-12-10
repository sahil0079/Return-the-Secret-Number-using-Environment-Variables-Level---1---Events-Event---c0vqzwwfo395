const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());


// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
    const secretNumber = process.env.NUMBER;

    if(secretNumber != undefined){
        res.status(200).json({
            number: secretNumber
        });
    }else{
    res.status(404).json({err: 'Not Found'})
});

module.exports = app;
