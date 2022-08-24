const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/users.js');
const downloadPath ='server.js'
//res.render() need view engine, use npm i ejs then app.set
app.set('view engine', 'ejs');

//middelware
// app.use(logger)



// app.get('/',logger/** you can put as many filter here*/
//     ,(req, res)=>{
//     res.download(downloadPath);
//     res.status(200).json({message:'error'});
//     res.send('hi')
//     res.render('index'); //one attribute
//     res.render('index',{text: 'world'})//multiple attribute
// })

//set static surf web
app.use(express.static('public'))

//access information coming from forms
//check post method from users.js to see the difference 
app.use(express.urlencoded({extended: true}))

//same as express.urlencoded but with json request
app.use(express.json())


const userRouter  = require('./routes/users.js');
// const postRouter  = require('./routes/users');
app.use('/users', userRouter)
// app.use('/posts', postRouter)

//define middleware (filter) here
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
    //works like a filters
}

app.listen(PORT, ()=>{console.log(`server now listening to port ${PORT}...`)});   
