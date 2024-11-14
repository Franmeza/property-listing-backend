import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/propertiesRouter";

export const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use(router);
