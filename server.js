const express = require('express'),
app = express(),
cors = require('cors'),
morgan = require('morgan'),
fs = require('fs'),
PORT = process.env.PORT || 8080;
require('dotenv/config');

app.use(cors());
app.use(morgan('dev'));

let bla = "";

app.get('/', (req, res) =>{
    res.send("This is the server");
})

app.get('/ggg', (req, res) =>{
    res.send("blabla");
    // if(bla == ""){
    //     fs.readFile('blabla.json', 'utf8', (err, data) =>{
    //         if(err){
    //             return res.status(500).json({error: "Can't read file"});
    //         } else {
    //             bla = JSON.parse(data);
    //             return res.json(bla);
    //         }
    //     })
    // } else {
    //     return res.json(bla);
    // }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));