import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import { userRouter } from "./routes/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);

app.use(handleErrorMiddleware);

export default app;
