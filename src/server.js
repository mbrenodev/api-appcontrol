const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, _req, res, next) => {
  res.status(400).json({ error: error.name });
  next();
});

app.listen(process.env.PORT, () => {
  console.log("API Start");
});
