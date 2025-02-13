const express = require("express");
const connetion = require("./config/db");
const cors = require("cors");
const route = require("./api/Routes");
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/api",route)
connetion();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
