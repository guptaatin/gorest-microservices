const express = require('express')
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

const port = 8082;

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/public'));

app.get('/particular-user/:id', (req, res) => {
    const id = req.params.id

    User.findOne({ id: id })
        .then((docs) => {
            console.log(docs);
            res.send(docs)
        })
        .catch((err) => {
            console.error(err);
        });
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "Particular User Called" })
})

app.listen(port, () => {
    console.log(`Particular User service is listening at http://localhost:${port}`)
})