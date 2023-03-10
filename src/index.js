const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://aparna21:tpzmDVkZSc3mpMTf@cluster21.u69lmjr.mongodb.net/test', {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err));

app.use('/', Router);

app.use((req, res) => res.status(400).send({ status: false, message: `Invalid URL` }));
app.listen(3000, () => console.log('Express app running on port 3000'));
