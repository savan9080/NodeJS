const path = require("path");

const express = require("express");

const mainRoutes = require("./routes/index");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(mainRoutes);

app.listen(3000);
