const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const server_app = express();
server_app.use(cors());

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "3.vom",
});

server_app.get("/", (re, res) => {
   return res.json("From backEnd side");
});

//Get all the data from DB and send it to front end
server_app.get("/blogposts", (request, response) => {
   const sql = "SELECT * FROM blogposts";
   db.query(sql, (err, data) => {
      if (err) return response.json(err);
      return response.json(data)
   });
});

server_app.listen(8080, () => {
   console.log("Server is running on port 8080");
});
