const express = require('express')
const request = require('request');
const app = express()

const port = 8081;

app.get('/users-list', (req, res)=> {
    var options = {
        host : 'gorest.co.in',
        path : 'https://gorest.co.in/public/v2/users',
        method : 'GET'
    }
    request(options, (error, response, body) => {
        // Printing the error if occurred
        if (error) console.log(error)
     
        // Printing status code
        console.log(response.statusCode);
     
        // Printing body
        console.log(body);
        res.status(200).json((body))
    });
    // let response = {
    //     data: {
    //         item: [
    //             {
    //                 id:1, name: 'order 1'
    //             },
    //             {
    //                 id:2, name: 'order 2'
    //             }
    //         ]
    //     }
    // }
})

app.get('/', (req, res) => {
    res.status(200).json({message: "User Called"})
})

app.listen(port, () => {
    console.log(`User service is listening at http://localhost:${port}`)
})