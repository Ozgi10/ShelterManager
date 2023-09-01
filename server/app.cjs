const express = require("express");
const routes = require("./Pets/routes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use("/pets", routes);

app.get("/", (req, res) => {
  res.send("Hello Shelter Manager!");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
