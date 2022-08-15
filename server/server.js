const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
// const knex = require("knex");
const mysql = require("mysql2");
const { config } = require("dotenv");

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
    console.log("Server Running on ${PORT}...");
  }
});

// Set up Server Connection

// const createTcpPool = async config => {
//   const dbConfig = {
//     client: 'mysql2',
//     connection: {
//       host: process.env.INSTANCE_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//     },

//     ...config,
//   };
//   return knex(dbConfig);
// };

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.INSTANCE_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },

  pool: { min: 0, max: 7 },
});
