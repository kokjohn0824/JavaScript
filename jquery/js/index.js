const p = new Promise(function(resolve, reject){
    const num  =Math.random()>0.5
    if(num){
        resolve('success from resolve')
    }else{
        reject('failed from reject')
    }
});


console.log(p.then((e) => {
console.log(e);
}).catch((e) => {    console.log(e);
})); 
