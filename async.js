// const a = () => {

// const { reject } = require("async")

//     console.log('Holi')
// }

// const b = () => {
    
//     a()

// }

// const c = () => {b()}

// c();

// const fetch = (callback) => {
//     setTimeout(() => {
//         console.log('1st')
//         callback();
//     }, 2000);
// }

// fetch(() => {
//     console.log('2nd')

// })

// const myAsyncFuncCB = (cb) => {
//     doSomethingAsync((err, data) => {
//         cb(err, data)
//     })
// }

// myAsyncFuncCB(functionThatHandlesStuff)

// Promises

// const reqFunc = fetch('https://jsonplaceholder.typicode.com/users/1')

// reqFunc
// .catch((err) => {
//     console.error(err);
// })
// .then((res) => {
//     console.log(res.status);
//     if (res.status) {
//         throw res.statusText
//     }
//     return res.json()
// })
// .then((data) => {

//     console.log(data);
// })

// .finally(() => {
//     console.log('No way for you to prevent his')
// })

// Async/Await

// const fetchUser = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/usersasdasdasdass/1')
//         if (res.status === 400  ) {
//             throw res.statusText
//         }
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log(error)
//         return error
//     }
    
    
// }

// fetchUser()
// .then((data) => {
//     console.log(data)
// });

let res = ''
const handleMyData = (data) => {
    res = data;
    console.log(res); // 
}
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Async')
    }, 3000);
})

promise
.then((data) => {

    res = data;
    handleMyData(data);
    // console.log(data);

})




const fn = () => {


    try {
        if (true) {
            throw new Error(`ReferenceError: holi`)
        }
    } catch (error) {
        console.error(error);
    }
   


    console.log('Todos tienen 100 sin hacer nada ;)')

}

fn();