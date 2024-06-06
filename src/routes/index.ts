import express from "express";

// import single route from directory
// ex: import ...Router from "./...Router";
import usersRouter from "./user/getUsers";
import createUserRouter from "./user/createUser"
import expressRootRouter from "./root/expressRoot";
import { errorHandler } from "../middlewares/error/errorHandler";



const router = express.Router();

router.use("/api", usersRouter, errorHandler);
router.use("/api", createUserRouter, errorHandler);
router.use('', expressRootRouter);


export default router;