import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 5001;
const APP_MODE = process.env.NODE_ENV;
const DATABASE_URL =
  APP_MODE === "DEV"
    ? "mongodb://localhost:27017/r-social"
    : "mongodb://mongo:27017/r-social";

const app = express();

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((e) => {
    console.error("r-social backend:: MongoDB connection error", e.message);
  });

app.use("/posts", postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a backend API for r-social.");
});

app.listen(PORT, () =>
  console.log(`r-social backend:: api is running on port ${PORT}`)
);
