const axios = require("axios");
const db = require("../models");

module.exports=function (app) {
  app.get("/api/articles", (req, res) => {
    db.Article.find().then(data => res.json(data));
  });
  
  app.post("/api/articles", (req, res) => {
    const articleData = req.body;
    db.Article.create(articleData).then(result => res.json(result));
  });
  
  app.delete("/api/articles/:id", (req, res) => {
    const articleId = req.params.id;
    db.Article.deleteOne({ _id: articleId }).then(result => res.json(result));
  });
}