const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('{YOUR DATABASE LINK}').then(
    () => {
        app.get('/', (req, res) => {
            const response = { statuscode: res.statusCode, message: 'API works' };
            res.json(response);
        });

        const noteRouter = require('./routes/Note');
        app.use("/notes", noteRouter);
    }
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('localhost:' + PORT));
