const authorize = (req, res, next)=>{
    console.log('authorize');

    const {user} = req.query
    if(user === "vishal"){
        req.user = {name: 'vishal', id:3}
        next();
    }
    else{
        res.status(404).send('<h3>Warrning: unauthorized access by the user</h3>');
    }

    // AUTHONTIAON USING THE QUERY STRING



}

module.exports = authorize; 