const express = require('express');
const dotenv = require('dotenv')
// morgan helps us in logging
const morgan = require('morgan');
const bodyParser=require('body-parser');
// path is inbuilt in node
const path=require('path');
const app = express();

// to keep environment variables separately
dotenv.config({ path : "config.env"});
const PORT = process.env.PORT || 3000;

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
// app.use('/', require('./server/routes/router'))


//res.render renders the specified html file without full path , just file name works because of app.set().
app.get('/manik', (req,res)=>{
    res.render('index');
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})