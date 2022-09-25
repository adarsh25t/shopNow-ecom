const express = require('express');
const errorMiddleware = require('./middleware/error')
const ErrorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json())

// Route Import
const product = require('./routes/productRoute');


// routers
app.use("/api/v1",product);

// Middleware for Errors
app.all('*',(req,res,next) => {
    next( new ErrorHandler(`request is not working on ${req.originalUrl} url`,404))
})

app.use(errorMiddleware);

 

module.exports = app;