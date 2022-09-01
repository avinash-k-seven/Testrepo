const axios = require('axios');

// const promise1 = Promise.resolve('Hello world');
// //console.log('kuchh bhi',typeof promise1)
// const promise2 = Promise.reject(10)
// const promise3 = new Promise((resolve,reject) => setTimeout(()=> reject('good bye'), 5000));
// const promise4 = axios.get('https://jsonplaceholder.typicode.com/users')
// //.then(res => console.log(JSON.stringify(res)))

// Promise.all([promise3,promise2,promise1])
// .then(values => {
//     console.log(values)});


async function serialResolvePromise(){

    try{

        

        const response1 = await Promise.resolve('Hello world').catch(err => {throw 'promise1'})
        console.log(response1)

        const response2 = await Promise.resolve(10) .catch(err => {throw 'promise2'})
        console.log(response2)

        const response3 = await new Promise((resolve,reject) => setTimeout(()=> reject('good bye'), 5000)) .catch(err => {throw 'promise3'})
        console.log(response3)

        


    }
    catch(err){
        if (err === 'promise2'){
            console.log('delete for promise 1')
        }
        else if (err === 'promise3'){
            console.log('delete for promise 1')
            console.log('delete for promise 2')
        }
        

    }


    

}

serialResolvePromise()