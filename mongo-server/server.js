const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

// const { config } = require("dotenv");
const { default: mongoose } = require("mongoose");
const e = require("express");

require("dotenv").config();

const { PORT, BACKEND_URL } = process.env;
console.log(PORT);
console.log(BACKEND_URL);

app.use(express.static("."));
app.use(express.json());
app.use(cors());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Running on ${PORT}...`);
  }
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

// DB CONNECTION

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to Database"));

// SCHEMAS

const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  birthday: String,
  email: String,
  password: String,
  phoneNumber: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  postalCode: String,
  country: String,
  region: String,
  cardName: String,
  cardNumber: Number,
  cvv: Number,
  expiryDate: String,
});

const productSchema = new mongoose.Schema({
  userID: String,
  subTag: String,
  tag: String,
  image: String,
  productName: String,
  productPrice: Number,
});

const wishlistSchema = new mongoose.Schema({
  userID: String,
  wishlist: [
    {
      id: String,
      subTag: String,
      tag: String,
      image: String,
      productName: String,
      productPrice: Number,
    },
  ],
});

const transactionSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  transaction: [
    {
      transactionID: String,
      transactions: [
        {
          id: String,
          tag: String,
          image: String,
          productName: String,
          productPrice: Number,
          quantity: String,
        },
      ],
    },
  ],
});

// MODELS

const User = mongoose.model("User", userSchema);
const Products = mongoose.model("Products", productSchema);
const Wishlist = mongoose.model("Wishlist", wishlistSchema);
const Transactions = mongoose.model("Transactions", transactionSchema);

// PUT Requests

app.put("/wishlist", (req, res) => {
  const filter = { userID: req.body.uid };
  Wishlist.findOneAndUpdate(
    filter,
    {
      $push: {
        wishlist: req.body.wishlist,
      },
    },
    { new: true },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(result);
      }
    }
  );
});

app.put("/myAccount", (req, res) => {
  const filter = { userID: req.body.uid };
  const update = {
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
    region: req.body.region,
    cardName: req.body.cardName,
    cardNumber: req.body.cardNumber,
    cvv: req.body.cvv,
    expiryDate: req.body.expiryDate,
  };

  User.findOneAndUpdate(
    filter,
    update,
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(result);
      }
    }
  );
});

// POST Requests

app.post("/transactions", (req, res) => {
  if (req.body) {
    let newTransaction = Transactions.create({
      userID: req.body.uid,
      transaction: [
        {
          transactionID: req.body.transactionID,
          transactions: req.body.transactions,
        },
      ],
    });

    res.status(201).send(newTransaction);
    console.log("New Transaction Generated");
  }
});

app.post("/wishlist", (req, res) => {
  let newWishlist = Wishlist.create({
    userID: req.body.uid,
    wishlist: req.body.wishlist,
  });

  res.status(201).send(newWishlist);
});

app.post("/signup", (req, res) => {
  let newUser = User.create({
    userID: req.body.uid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    postalCode: req.body.postalCode,
    country: req.body.country,
    region: req.body.region,
    cardName: req.body.cardName,
    cardNumber: req.body.cardNumber,
    cvv: req.body.cvv,
    expiryDate: req.body.expiryDate,
  });

  res.status(201).send(newUser);

  console.log("New User Created!");
});

// GET Requests

app.get("/myAccount", (_req, res) => {
  User.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/transactions", (_req, res) => {
  Transactions.find({ userID: _req.body.uid }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/wishlist", (_req, res) => {
  Wishlist.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

// GET Requests (Specific to Products)

app.get("/featured", (_req, res) => {
  Products.find({ tag: "featured" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/accessories", (_req, res) => {
  Products.find({ tag: "accessories" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/makeup", (_req, res) => {
  Products.find({ tag: "makeup" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/handbags", (_req, res) => {
  Products.find({ tag: "handbags" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/plush", (_req, res) => {
  Products.find({ tag: "plush" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.get("/mugs", (_req, res) => {
  Products.find({ tag: "mugs" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  });
});
