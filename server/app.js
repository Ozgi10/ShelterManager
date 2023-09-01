import express from "express";
import dotenv from "dotenv";
//import pg from "pg";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;

app.get("/", (req, res) => {
  res.send("Hello Shelter Manager!");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
