const express = require('express');
const hbs = require('express-handlebars');
const restaurantRouter = require('./routes/restaurant');
const path = require('path');
//creater Server
const app = express();
/*app.get('/',(req,res) => {
    res.send('<h1>Hello Restaurant API <h1>');
});*/
//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
//Middleware เพื่ออ่าน req.body
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//router
app.use('/api',restaurantRouter);
app.listen(3000,()=>{
    console.log('Listening to port 3000');
});