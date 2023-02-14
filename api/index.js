const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");

app.use(
  cors({ credentials: true, origin: "https://tindev-france.netlify.app/" })
);
app.use(express.json());
// app.use(cookieParser());

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://tindev:V9YQP8diafBGWBBM@cluster0.dvha3hp.mongodb.net/?retryWrites=true&w=majority"
);
app.get("/test", (req, res) => {
  res.json("server ok");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.create({
      email,
      password,
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.listen(5000);
