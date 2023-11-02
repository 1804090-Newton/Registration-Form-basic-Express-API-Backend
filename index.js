const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:4200" // Remove the trailing slash
}));

mongoose.set('strict', true);

async function connectToDB() {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/dbschool', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected!!!!!");
  } catch (error) {
    console.error(error);
  }
}

connectToDB(); // Call the function to connect to the database.

const port = 8086;
app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Port Connected !!!! 8086 successfully");
  }
});

app.use(express.json());
app.use(routes);
