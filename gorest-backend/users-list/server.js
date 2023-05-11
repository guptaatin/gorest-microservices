const express = require('express')
const request = require('request');
const cors = require('cors');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Gorest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = {
    id: String,
    name: String,
    email: String,
    gender: String,
    status: String
};

const User = mongoose.model("User", userSchema);
const app = express()

const port = 8081;

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/public'));

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
        let dataArray = JSON.parse(body);
        const promises = dataArray.map((data) => {
            return User.findOneAndUpdate(
                { id: data.id },
                { $setOnInsert: data },
                { upsert: true, new: true }
            ).exec();
        });

        Promise.all(promises)
            .then((results) => {
                console.log('Objects checked and inserted:', results);
                res.send(results)
            })
            .catch((err) => {
                console.error(err);
            });
    });
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "User Called" })
})

app.listen(port, () => {
    console.log(`User service is listening at http://localhost:${port}`)
})