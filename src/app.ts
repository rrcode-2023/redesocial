import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app: Application = express();
app.use(express.json());

app.use(handleErrorMiddleware);

export default app;
