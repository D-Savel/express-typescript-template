import express from "express";

// import single route from directory
// ex: import ...Router from "./...Router";
import usersRouter from "./users/getUsers";
import createUserRouter from "./users/createUser"
import expressRootRouter from "./root/expressRoot";
import { errorHandler } from "../middlewares/error/errorHandler";



const router = express.Router();

router.use('', usersRouter, errorHandler);
router.use('', createUserRouter, errorHandler);
router.use('', expressRootRouter);


export default router;