import express from "express";
import {publicRouter} from "../route/public-api.js";
import {errorMiddleware} from "../middleware/user-middleware.js";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);