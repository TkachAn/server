const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});
// app.use("/api/contacts", contactsRouter);

// app.use((req, res) => {
//   res.status(404).json({status: "Error", code: 404, message: "Not found!"});
// });

// app.use((err, req, res, next) => {
//   res
//     .status(err.status || 500)
//     .json({status: "Error", code: err.status || 500, message: err.message});
// });

module.exports = app;
