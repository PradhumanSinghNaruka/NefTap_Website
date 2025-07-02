// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import contactRoute from "./route/contact.route.js";
// import contactusRoute from "./route/contactus.route.js";
// import enquireRoute from "./route/enquire.route.js";
// import registerRoute from "./route/register.route.js";
// import cardRoute from "./route/carddetail.route.js";
// import addressRoute from "./route/address.route.js";
// import userdetailRoute from "./route/userdetail.route.js";
// import expressFileUpload from "express-fileupload";

// const app = express();

// app.use(
//   expressFileUpload({
//     useTempFiles: true,
//   })
// );
// app.use(cors());
// app.use(express.json());

// dotenv.config();

// const PORT = process.env.PORT || 4001;
// const URI = process.env.Mongo_URI;

// const startServer = async () => {
//   try {
//     await mongoose.connect(URI, {
//       serverSelectionTimeoutMS: 30000,
//     });
//     console.log("Connected to mongoDB");

//     app.use("/contact", contactRoute);
//     app.use("/contactus", contactusRoute);
//     app.use("/enquire", enquireRoute);
//     app.use("/register", registerRoute);
//     app.use("/card", cardRoute);
//     app.use("/address", addressRoute);
//     app.use("/userdetail", userdetailRoute);

//     app.listen(PORT, () => {
//       console.log(`Server is listening on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// };

// startServer();


// import express from "express";
// import mysql from "mysql2";
// import dotenv from "dotenv";
// import cors from "cors";

// import contactRoute from "./route/contact.route.js";
// import contactusRoute from "./route/contactus.route.js";
// import enquireRoute from "./route/enquire.route.js";
// import registerRoute from "./route/register.route.js";
// import cardRoute from "./route/carddetail.route.js";
// import addressRoute from "./route/address.route.js";
// import userdetailRoute from "./route/userdetail.route.js";
// import expressFileUpload from "express-fileupload";

// dotenv.config();

// const app = express();

// app.use(
//   expressFileUpload({
//     useTempFiles: true,
//   })
// );
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 4001;

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,   
//   user: process.env.DB_USER,       
//   password: process.env.DB_PASS,   
//   database: process.env.DB_NAME,   
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection error: ", err);
//     process.exit(1);  
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

// app.use((req, res, next) => {
//   req.db = db;
//   next();
// });

// app.use("/contact", contactRoute);
// app.use("/contactus", contactusRoute);
// app.use("/enquire", enquireRoute);
// app.use("/register", registerRoute);
// app.use("/card", cardRoute);
// app.use("/address", addressRoute);
// app.use("/userdetail", userdetailRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });


import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

import contactRoute from "./route/contact.route.js";
import contactusRoute from "./route/contactus.route.js";
import enquireRoute from "./route/enquire.route.js";
import registerRoute from "./route/register.route.js";
import cardRoute from "./route/carddetail.route.js";
import addressRoute from "./route/address.route.js";
import userdetailRoute from "./route/userdetail.route.js";
import expressFileUpload from "express-fileupload";
import visitRoutes from "./route/visit.route.js";
import googleRoute from "./route/google.route.js";
import forgeRoute from "./route/forget.route.js";

import updateRoute from "./route/pasword.route.js";

dotenv.config();

const app = express();

app.use(
  expressFileUpload({
    useTempFiles: true,
  })
);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;

// MySQL connection pool instead of single connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL pool connection error:", err);
    process.exit(1);
  }
  if (connection) connection.release();
  console.log("Connected to MySQL database via pool");
});

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use("/contact", contactRoute);
app.use("/contactus", contactusRoute);
app.use("/enquire", enquireRoute);
app.use("/register", registerRoute);
app.use("/card", cardRoute);
app.use("/address", addressRoute);
app.use("/userdetail", userdetailRoute);
app.use("/api", visitRoutes);
app.use("/google", googleRoute);
app.use("/auth", forgeRoute);

app.use("/update", updateRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
