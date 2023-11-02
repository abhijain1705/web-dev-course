const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://abhijain3002:y77wdafcKn27WRbB@cluster0.ccpxf2y.mongodb.net/fruitdb"
  )
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch(() => {
    console.log("Error Occured in Mongodb Connection.");
  });

// document creation
const mySchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: Number,
  rating: {
    type: Number,
    min: [1, "Too few ratings"],
    max: 10,
  },
});

const myModal = mongoose.model("Fruits", mySchema);

const apple = new myModal({
    name: "Apple",
  price: 40,
  rating: 2,
});

apple
  .save()
  .then(() => {
    console.log("Document created successfully");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error occured");
  });

// fetch documents
// myModal
//   .findById({ _id: "652cf1c86ea4f3049d546c58" })
//   .then((docs) => {
//     console.log(docs);
//     console.log("Document  successfully");
//   })
//   .catch(() => {
//     console.log("Error occured");
//   });

// update documents
// myModal
//   .findByIdAndUpdate({ _id: "652cf1c86ea4f3049d546c58" }, { name: "Orange" })
//   .then(() => {
//     console.log("Document  Updated successfully");
//   })
//   .catch(() => {
//     console.log("Error occured");
//   });

// delete documents
// myModal
//   .findByIdAndDelete({ _id: "652cf1c86ea4f3049d546c58" })
//   .then(() => {
//     console.log("Document Deleted successfully");
//   })
//   .catch(() => {
//     console.log("Error occured");
//   });

app.listen(5000, () => {
  console.log("Successfully listening at port 5000.");
});
