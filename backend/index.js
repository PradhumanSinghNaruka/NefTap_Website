import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import userRoute from "./route/user.route.js";
// import contactRoute from "./route/contact.route.js";
// import buyRoute from "./route/buy.route.js"
import contactRoute from "./route/contact.route.js";
import contactusRoute from "./route/contactus.route.js";
import enquireRoute from "./route/enquire.route.js";
import registerRoute from "./route/register.route.js";
import cardRoute from "./route/carddetail.route.js";
import addressRoute from "./route/address.route.js";
import userdetailRoute from "./route/userdetail.route.js";
import expressFileUpload from "express-fileupload";

const app = express();

app.use(
  expressFileUpload({
    useTempFiles: true,
  })
);
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.Mongo_URI;

const startServer = async () => {
  try {
    await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to mongoDB");

    app.use("/contact", contactRoute);
    app.use("/contactus", contactusRoute);
    app.use("/enquire", enquireRoute);
    app.use("/register", registerRoute);
    app.use("/card", cardRoute);
    app.use("/address", addressRoute);
    app.use("/userdetail", userdetailRoute);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

startServer();
