const express = require('express');
const app = express();
const userRouter = require('./routes/userRouting');
const articleRouter=require('./routes/articleRouting');
const path= require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

const port=3000;

app.use(cors());
app.use(bodyParser.json()); //to parse string request to json format
app.use(express.static(path.join(__dirname,'../public')));

app.use('/articles',articleRouter);

app.use('/',userRouter);

app.listen(port);
console.log("server listening to port 3000");
