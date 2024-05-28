import express from "express";

// import single route from directory
// ex: import ...Router from "./...Router";
import userRouter from "./userRouter";
import { expressOpeningController } from "../controllers/expressOpeningController";

const router = express.Router();

router.use("/users", userRouter);
router.use("", expressOpeningController);

export default router;