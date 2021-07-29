require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

// Basic Configuration
const { DEFAULT_PORT } = require("./utils/constants");

const user_controller = require("./controllers/user");
const exercise_controller = require("./controllers/exercise");
const log_controller = require("./controllers/log");

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// info page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// user endpoints
app.get("/api/users", user_controller.list);
app.post("/api/users", user_controller.post);

// exercises endpoints
app.post("/api/users/:_id/exercises", exercise_controller.post);

// logs endpoints
app.get("/api/users/:_id/logs", log_controller.get);

const listener = app.listen(DEFAULT_PORT || process.env.PORT, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
