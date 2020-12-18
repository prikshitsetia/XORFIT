const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(cors());
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

//app.use(allowCrossDomain);
mongoose.connect("mongodb://localhost:27017/xorfit", {
  useNewUrlParser: true,
});
// mongodb+srv://Prikshit:bully8498@cluster0.j3rbp.mongodb.net/employee
const userSchema = {
  name: String,
  email: String,
  password: String,
  phone: String,
  weight: Number,
  height: Number,
};
const poseSchema = {
  poseName: String,
  poseLink: String,
  nextPose: String,
};

const User = mongoose.model("User", userSchema);
const Pose = mongoose.model("Pose", poseSchema);

app.get("/", (req, res) => {
  User.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      console.log(err);
      res.send("0");
    } else {
      if (result) {
        bcrypt.compare(req.body.password, result.password, function (err, r) {
          if (r === true) {
            res.send("1");
          } else {
            console.log(err);
            res.send("0");
          }
        });
      } else {
        res.send("0");
      }
    }
  });
});

app.post("/signup", (req, res) => {
  console.log("hello");
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      weight: req.body.weight,
      height: req.body.height,
    };
    User.create(newUser, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("1");
      }
    });
  });
});

app.post("/pose", (req, res) => {
  const pose = req.body.pose;
  Pose.findOne({ poseName: pose }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      Pose.findOne({poseName:result.poseName},(error,resultPose)=>{
        if(error){
          console.log(error);
        }else{
          return res.render(path.join(__dirname, "learn.ejs"), {
            data: resultPose.poseLink,
            name: resultPose.poseName,
        
        }
      })
        });
    }
  });
});

app.listen(3001, "0.0.0.0", function () {
  console.log("Server started at port 3001");
});
//https://www.pluralsight.com/guides/exposing-your-local-node-js-app-to-the-world
