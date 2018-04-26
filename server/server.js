const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //an instance of the express creation
const mongoose = require ('mongoose');
app.use(express.static('server/public'));
const PORT = process.env.PORT || 5000;
const foodRouter = require('./routes/food.routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

app.use('/food', foodRouter);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

const databaseUrl = 'mongodb://localhost:27017/kitchen';


mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});



// Serve static files

