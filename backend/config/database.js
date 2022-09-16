const mongoose = require('mongoose');

module.exports = function connectDataBase() {
    mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
        console.log(`Mongodb connected with server ${data.connection.port}`);
    }).catch((err) => {
        console.log(err);
    })
} 