const http = require('http');

const {readFileSync} = require('fs');
// i am doing this for getting all file that aer require to run the app properly
const homehtml = readFileSync('./navbar-app/index.html');
const homecss = readFileSync('./navbar-app/styles.css');
const homelogo = readFileSync('./navbar-app/logo.svg');
const homelogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res)=>{
    
    
    //YE METHOD K BARRE MEIN BATATA HAI
    // console.log(req.method);

    // YE BATATA HAI KI VO KIS DATA KOLENE KA TRY KAR RAHA HAI
    // console.log(req.url);
    
    const url = req.url;
    console.log(url);




    // home page(index.html)
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(homehtml)
        res.end();
    }
    // about page
    else if(url === '/styles.css'){
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.write(homecss)
        res.end();
    }
    // logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'Content-Type': 'image/svg+xml'})
        res.write(homelogo)
        res.end();
    }
    // about page
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'Content-Type': 'text/javascript'})
        res.write(homelogic)
        res.end();
    }
















    // error page
    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end();
    }

})
.listen(5000);
console.log('server is lising on the port 5000...');