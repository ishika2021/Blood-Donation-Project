const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Middleware
app.use(express.json());

//Routes
app.use("/api/users", require("./Routes/SignUp"));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});

//MongoDB
mongoose
  .connect("mongodb://127.0.0.1/Blood-Donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});