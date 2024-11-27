const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
}

// test(1000).then(() => console.log('1000ms'))
// test(2000).then(() => console.log('2000ms'))

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('ALL')
// })

Promise.race([test(50000), test(1000)]).then(() => {
    console.log('ALL')
})