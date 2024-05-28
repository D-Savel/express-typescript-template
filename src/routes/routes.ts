import express from "express";

// import single route from directory
// ex: import ...Router from "./...Router";
import userRouter from "./userRouter";
import expressOpeningRouter from "../controllers/express/expressOpeningController";


const router = express.Router();

router.use("/usersApi", userRouter);
router.use('', expressOpeningRouter)

export default router;