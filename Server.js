const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require('./routes/TodoRoute')
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.port || 8000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((error) => console.log(error));


app.use(routes)



app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
