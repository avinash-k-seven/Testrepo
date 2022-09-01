const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log('resolve wala hai to result dega')
        //resolve([1,2,3])
        reject('things went bad')
    },2000)
})

doWorkPromise.then((result) =>{
    console.log('success!',result)
}).catch((error) =>{
    console.log('eroor!',error)
})


