import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import delUserById from "../../controllers/api/users/delUserById";
import { delUserByIdValidator } from "../../validation/users/delUserByIdValidator";
import { ValidationChain } from "express-validator";
// import {...} from "../controllers/...";
// import {...Validator} from "../validators/...";

const router = express.Router();

router.delete('/api/users/:id', validate(delUserByIdValidator as ValidationChain[]), delUserById);

export default router;