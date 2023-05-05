import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import { userRouter } from "./routes/user.routes";
import { userPostRouter } from "./routes/userPost.routes";
import { sessionRouter } from "./routes/session.routes";
import { requestUserRouter } from "./routes/request.route";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/user/post", userPostRouter)
app.use("/login", sessionRouter);
app.use("/request", requestUserRouter);

app.use(handleErrorMiddleware);

export default app;
