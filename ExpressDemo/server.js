const express = require('express');
const app = express();
const PORT = 3000;



app.use('/', (req, res)=>{

console.log('hi')
res.send("hi from express")
})


app.listen(PORT, ()=>{
    console.log(`server listening ${PORT}...`)
});