const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("/routes");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.get("/api/articles", (req, res) => {
  db.Article.find()
    .then(data => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/articles", (req, res) => {
  console.log("Trying to save an article to database");
  const articleData = req.body;
  console.log(articleData);
  article = new db.Article(articleData)
  db.Article.create(article)
    .then((result) => {
      res.json(result)
      console.log(result);
    })
    .catch((err) => {
      return res.json(err);
    });
});

app.delete("/api/articles/:id", (req, res) => {
  // const articleId = req.params.id;
  db.Article.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json(result)
    }).catch((err) => {
      return res.json(err);
    });
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
