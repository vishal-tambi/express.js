const express = require('express');

const morgan = require('morgan');

const app = express();

const logger = require('./vishal_express.js/middleware_logger');
const muthorize = require('./vishal_express.js/authorize');
const authorize = require('./vishal_express.js/authorize');

// SETTING UP THE ROUTES
// PASSING UP THE MIDDWARE IN THE ROUTES
// EXPRESS HELP IT IN THIS TO ACCESS THE REQ AND RES 




// HOW CAN I APPLR THIS LOGGER TO ALL MY ROUTES
// THE ANSWER IS THAT WE USE APP.USE 

// app.use([ authorize, logger]);
// YOU CAN NOT PASS THE PATH IN THE LOGGER (APP.USE), FOR GETTING THE RESON YOU CAN CHECK THE 6.27 IN THE VIDEO



// Using a predefined format string
app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send('home page')
})

app.get('/about', (req,res)=>{  
    res.send('about page')
})
app.get('/api/products', (req,res)=>{
    res.send('products')
})



app.get('/api/itmes', (req,res)=>{
    res.send('itmes')
})

// BASSICALLY IF YOU WANT TO MAKE THE MIDDLEWARE IN TO AN SINGLE ROUTE ONLY THEN YOU CAN DO THAT BY THIS :-
// app.get('/api/itmes',[logger, authorize],(req,res)=>{
//     res.send('itmes')
// })




app.listen(5000, ()=>{
    console.log(`server is listing on the port 5000...`);
})
    