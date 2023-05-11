const express = require('express')
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8083;

app.post('/update-particular-user', (req, res) => {
    console.log("daa--->", req.body)
    const options = {
        url: `https://gorest.co.in/public/v2/users/${req.body.id}`,
        body: {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        },
        json: true,
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client',
            'Authorization': 'Bearer 7f59d3ebce77d2ff3b10911eda5c067a0a23a1d5eedbda330ae9c5243a13e270'
        }
    };

    request(options, function (err, response, body) {
        const check = body.hasOwnProperty('name');
        console.log(body);
        if (check) {
            let json = JSON.parse(body);
            res.status(200).send(json)
        } else {
            res.status(404).send(body)
        }
    });
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "User Update Called" })
})

app.listen(port, () => {
    console.log(`User Update service is listening at http://localhost:${port}`)
})