const express = require('express');
const router = express.Router();
const users = [{name:'kyle'},{name:"Sally"}];


router.use(logger);

router.get('/', (req, res)=>{
    res.send('User List')
    console.log(req.query.name)

})
router.get('/new', (req, res)=>{
    res.render('users/new', {firstName:'Test'})
})



router.post('/', (req, res)=>{
const isValid = true;
if(isValid){
    users.push({firstName: req.body.firstName})
    res.redirect(`/users/${users.length -1}`)
    //redirect users
}else{
    console.log('Error')
    res.render('users/new', {firstName: req.body.firstName})
}
    // res.send('Create User')

//error express doesn't allow you to access body
//needs a middleware
console.log(req.body.firstName);
res.send('hi')
})

//start of parameter
//be ware of path overwrite 


//route

router
.route('/:id')
.get((req, res)=>{
    console.log(req.user)
    // res.send(`get user with id ${req.params.id}`)
    res.send(`get user with id: ${req.params.id}`)
})
.put((req, res)=>{
    res.send(`Update user with id ${req.params.id}`)
})
.delete((req, res)=>{
    res.send(`Delete user with id ${req.params.id}`)
})


router.param('id', (req, res, next, id)=>{
    req.user = users[id]
    next()
})

//define middleware (filter) here
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
    //works like a filter
}

module.exports = router;