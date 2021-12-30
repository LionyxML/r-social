import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const apiPort = 5001;

const connectionString = "mongodb://mongo:27017/r-social";
mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("MongoDB connection error", e.message);
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(apiPort, () =>
  console.log(`r-social backend: running on port ${apiPort}`)
);
