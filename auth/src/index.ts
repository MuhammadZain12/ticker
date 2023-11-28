import express from "express";
import { json } from "body-parser";
import router from "./routes/routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(router);

app.use(errorHandler)

app.listen(3000, () => {});
