const express = require('express');
const chalk = require('chalk');
const app = express();
const student = require('./api/route.config');
const bodyParser = require("body-parser")



app.listen(3000, () => console.log(chalk.green("Listening on port 3000...")));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});

student.routesConfig(app);
//auth.routesConfig(app);
