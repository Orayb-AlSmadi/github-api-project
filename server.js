const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const axios = require("axios");

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// const playersRouter = require("./routes/players");
// app.use("/players", playersRouter);

app.get("/:s", (req, res) => {
  let s = req.params.s;
  let request = `https://api.github.com/users/${s}/repos`;
  axios
    .get(request)
    .then(response => {
      res.send(response.data.slice(0, 5));
    })
    .catch(error => {
      res.send("User is not Found");
    });
});

app.post("/data", (req, res) => {
  let newData = req.body;
  console.log(newData);
  data.push(newData);
  res.json(data);
});

data = [
  {
    id: 1,
    name: "Ahmad",
    Age: 27
  },
  {
    id: 2,
    name: "Orayb",
    Age: 27
  }
];

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("it's listening");
});

module.exports = app;
