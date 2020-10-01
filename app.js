const express = require('express');
const app = express();
const env = require('dotenv');

env.config();

app.use(express.static('public'))
app.use(express.json());

app.use('/api/product',require('./routes/product'));

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}/`);
});