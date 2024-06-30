const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})



app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image };
    })
    res.json(newProduct)
});





// THIS IS CALLED THE HARD CODED CODE \

// (IN THIS COLUTION MIND I FI HAVE 400 PRODUCNTS THEN I WILL NOT ABLE TO MAKE THE RESPONCE OFOR TEH EACH AND EEVERY PRODUCT THAT;S WHY THE SECOND SOLUTION CAME WHIHC IS ROUTE PARAMS)


// THIS IS FOR THE SINGLE PRODUCT AND THE PRODUCT ID YOU WILL GOING TO PROVIED(I MEAN THE USE WILL CILCK ON THE PRODUCT AND THE API WILL FATCH THE DATA ACCORDING TO THAT)
// app.get('/api/products/3', (req, res)=>{
//     // const {product} = req.params;
//     const singleProduct = products.find((product)=> product.id===3)
//     res.json(singleProduct);

// })



// ROUTE PARAMETES CAN GO HAED AND HARD THE EXAMPLE IS IN TEH VODEO 

// ROUTE PARAMS IN THE EXPRESS JS

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProducnt = products.find((product) => product.id === Number(productID))

    if (!singleProducnt) {
        return res.status(404).send(`we don;t have the product:-  <h2> ${productID} </h2>`)
    }

    res.json(singleProducnt)
})


// THIS IS THE QUERY STRING :-
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);



    // NOW I AM MAKIENG THE LIMITS HERE:-
    const { search, limit } = req.query;
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search)
        }
        )
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})

    // NOTE:-
    // YPU CAN ALSO PROVIDES A SEARCH IN THE URL AND IF THAT PARTICULAR SEARCH MATHCHES THEN YOU WILL GET THAT RESULT
    // EXAPLE OF THE URL:-(http://localhost:5000/api/v1/query?search=albany%20sofa)

    








app.listen(5000, () => {
    console.log(`Server is listing on the port 5000..`);
    console.log(`server is expexting the single prodcut!!`);
})