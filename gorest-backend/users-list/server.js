const express = require('express')
const request = require('request');
const cors = require('cors');
const app = express()

const port = 8081;

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.get('/users-list', (req, res) => {
    const options = {
        url: 'https://gorest.co.in/public/v2/users',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };

    request(options, function (err, response, body) {
        let json = JSON.parse(body);
        console.log(json);
        res.status(200).send(json)
    });
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "User Called" })
})

app.listen(port, () => {
    console.log(`User service is listening at http://localhost:${port}`)
})