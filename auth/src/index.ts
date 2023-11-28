import express from "express";
import { json } from "body-parser";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/errors";

const app = express();
app.use(json());

app.use(userRouter);

app.all("*", (req, res, next) => {
  return next(new NotFoundError());
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Auth Server Listening on port 3000");
});
