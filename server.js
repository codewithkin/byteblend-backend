//Imports
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGOURI;
const router  = require('./routers/router');
const { mongoose } = require('mongoose');

const app = express();
app.use(cors());

//Middleware
app.use(express.json());
app.use(express.static('static'));
app.use(cors({
  origin: [
	"http://localhost:4000", "https://byteblend-social-net.onrender.com"],
		})
);

//Listening for requests
mongoose.connect(uri)
    .then(console.log('Connected to database'))
    .then(app.listen(PORT, () => {
        console.log(`Listening for requests on port ${PORT}`)
    }))
    .catch(err => console.log(err));

//Routing
app.use('/', router);
//app.use('/api/byteblend/users/', userRouter);

//404