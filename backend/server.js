const app = require('./app');
const dotenv = require('dotenv');
const connectDataBase = require('./config/database')

// config
dotenv.config({ path: "backend/config/config.env"})


app.listen(process.env.PORT,()=>{
    connectDataBase() // run the mongodb database server
    console.log(`SERVER START ON ${process.env.PORT}`);
})