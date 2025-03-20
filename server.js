import express from "express";
import { router } from "./routes/index.js";
import "dotenv/config.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${3000}`);
});
