const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
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
var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8083;

app.use(express.static(__dirname + '/public'));

app.post('/update-particular-user', (req, res) => {
    User.findOneAndUpdate(
        { id: req.body.id }, // Query to find the document to update
        {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        }, // Update object with new values
        { new: true } // Options to return the updated document
    )
        .then((updatedDoc) => {
            console.log('Document updated:', updatedDoc);
            res.send(updatedDoc)
        })
        .catch((err) => {
            console.error(err);
        });
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "User Update Called" })
})

app.listen(port, () => {
    console.log(`User Update service is listening at http://localhost:${port}`)
})