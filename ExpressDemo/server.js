const express = require('express');
const app = express();
const PORT = 3000;

//set app to open static web
app.use(express.static('public'));

app.use('/hello', (req, res)=>{

console.log('hi')
res.send("hi from express")
})





app.listen(PORT, ()=>{
    console.log(`server listening ${PORT}...`)
});