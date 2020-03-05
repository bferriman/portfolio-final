// Requiring necessary npm packages
const express = require("express");
// Set Handlebars.
const exphbs = require("express-handlebars");
// require projects data json file

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  console.log("GET request received");
  const projects = require("./projects.js");
  console.log(projects);
  res.render("index", projects);
});

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
  console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

