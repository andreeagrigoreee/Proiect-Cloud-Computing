const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const messagesRouter = require('./Rute/messages-router');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use("/messages",messagesRouter);

const port = process.env.PORT || 8080;

/* app.get('/', (req, res) => {
  res.send('Hello World again!');
});
 */



app.listen(port, () => {
  console.log(`Example app LOL listening on port ${port}!`)
});