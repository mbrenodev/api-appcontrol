const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, _req, res, next) => {
  res.status(400).json({ error: err.name });
  next();
});

app.listen(process.env.PORT, () => {
  console.log("API Start");
});
