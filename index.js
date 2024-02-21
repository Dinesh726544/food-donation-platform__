import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/action", (req, res) => {
    res.send(`thank you to ${req.body["fname"]} for contribution of ${req.body["lname"]} packets of food`);
    console.log(`${req.body["fname"]} have ${req.body["lname"]} packet of food available`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
