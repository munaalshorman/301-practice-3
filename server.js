'use srtict';
//dependencies

require('dotenv').config();

const express=require('express');
const cors=require('cors');
const server =express();
const PORT=process.env.PORT || 3000;

server.use(cors());

console.log('hi')
// Can respond to a get request on the route: /
// Send a status of 200 with the text "Home Page"

server.get('/',(req,res)=>{
    res.status(200).send('Home Page');
    console.log('1')

})

// Can respond to a get request on the route: /data
// Send a status of 200 with a JSON object of your choosing to the browser
const data={"a":'a',"b":'b'}
server.get('/data',(req,res)=>{
    res.status(200).json(data);
    console.log('2')

})


// Sends a status message of 404 with the text 'Not Found' for any other route.
server.use('*',(req,res)=>{
    res.status(404).send('Not Found');
    console.log('3')

})

// Listens on port 3000

server.listen (PORT,()=>{console.log(`app is listening on PORT ${PORT}`)});

