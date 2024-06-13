import express from "express";

// import single route from directory
// ex: import ...Router from "./...Router";
import usersRouter from "./users/getUsers";
import createUserRouter from "./users/createUser"
import getUserByUsernameRouter from "./users/getUserByUsername";
import getUserByIdRouter from "./users/getUserById"
import expressRootRouter from "./root/expressRoot";
import { errorHandler } from "../middlewares/error/errorHandler";



const router = express.Router();

router.use('', usersRouter, errorHandler);
router.use('', createUserRouter, errorHandler);
router.use('', expressRootRouter);
router.use('', getUserByUsernameRouter);
router.use('', getUserByIdRouter);

export default router;