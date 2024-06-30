const express = require('express');
const path = require('fs');

const app = express();




// basically we are trying to set up the static resource for the express so it can use the linked file with the html file, so the app would work properly 
// from the gemini:-
// Serves static files: express.static is a middleware function in Express.js that efficiently delivers static content from a designated directory within your project to the browser. These static files are typically assets that don't require server-side processing, such as:
// Images (.jpg, .png, .gif)
// Cascading Style Sheets (CSS)
// JavaScript files (.js)
// HTML files (.html)
app.use(express.static('./navbar-app'));




// YOU ALSO NOT NEED TO SET UP THE FOLLOWIN THING CAUSE THE STATIC WILL TAKE THE ALL RESOURCE FROM TEH NAVBAR-APP FOLDER 

//setitng up the nav app by the expressjs
// app.get('/', (req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


// FOR THE 404 CODE 
app.all('*', (req,res)=>{
    res.status(404).send(`resource is not found`);
})




app.listen(5000, ()=>{
    console.log(`server is listing on the port 5000 hshsh`);
})