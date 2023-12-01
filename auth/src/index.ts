import express from "express";
import { json } from "body-parser";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/errors";
import mongoose from "mongoose";

const app = express();
app.use(json());

app.use(userRouter);

app.all("*", (req, res, next) => {
  return next(new NotFoundError());
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("Auth Server Listening on port 3000");
  });
};

start();
