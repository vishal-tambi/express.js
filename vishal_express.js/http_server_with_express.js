const express  =require('express');

const app = express();




//HOME PAGE
app.get('/', (req,res)=>{
    res.status(200).send('This is the home page')
})
//ABOUT PAGE
app.get('/about', (req,res)=>{
    res.status(200).send('This is the about page')
})
//CONTACT PAGE
app.get('/contact', (req,res)=>{
    res.status(200).send('This is the contact page')
})
//WHAT DO I DO PAGE
app.get('/do', (req,res)=>{
    res.status(200).send('This is the what do i do page')
})

//404 responce

app.all('*', (req, res)=>{
    console.log(`user just trying to access teh resource that is not avalible`);
    res.status(404).send('<h3>this is not we are having right now!!</h3>')
})



app.listen(5000, ()=>{
    console.log(`server is listining in the port 5000..`);    
})