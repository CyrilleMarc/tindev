const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
var port = process.env.PORT || 3002;
require("dotenv").config();

app.use(cors({ credentials: true, origin: process.env.REACT_APP_PORT }));
app.use(express.json());
// app.use(cookieParser());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.REACT_APP_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connectée");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/edit", async (req, res) => {
  res.json(await User.find());
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const userEdit = await User.findById(id);
  res.json(userEdit);
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


app.post("/register", async (req, res) => {
  const { email, password, isRecruteur, isDeveloppeur } = req.body;
  try {
    const userDoc = await User.create({
      email,
      password,
      isRecruteur, 
      isDeveloppeur,
      
    });
    // console.log(userDoc._id);
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { email, password },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.listen(port);
