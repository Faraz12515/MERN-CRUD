const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("../server/models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://faraz12515:ubitbsse12515@mern-crud.tixvlbj.mongodb.net/"
);

/*** INIT API FOR USERS ***/
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

/*** ADD API FOR USERS ***/
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

/*** EDIT API FOR USERS ***/
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

/*** UPDATE API FOR USERS ***/
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

/*** UPDATE API FOR USERS ***/
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
