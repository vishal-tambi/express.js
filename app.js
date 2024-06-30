const express = require('express')
const app = express()
let {people} = require('./data')

// post(for inserting the data)
// static assets
app.use(express.static('./methods-public'))



app.use(express.urlencoded({extended:false}));


// get(it is a default methode that browser perform)
app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
})






// TO SEND THE DATA EW NED TO DO THIS:-

// now adding some functionality to the login
app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200). send(`welcome <h2>${name}</h2>, we belive that you are having a greate time!!`)
    }
    else{
        return res.status(404).send(`first you have to pass the name stupid!!`)
    }
    
})



app.listen(5000, (req, res)=>{
    console.log(`server is lieting on the port 5000`);
})