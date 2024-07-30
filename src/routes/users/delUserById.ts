import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import delUserById from "../../controllers/api/users/delUserById";
import { delUserByIdValidator } from "../../validators/users/delUserByIdValidator";
// import {...} from "../controllers/...";
// import {...Validator} from "../validators/...";

const router = express.Router();

router.delete('/api/users/:id', validate(delUserByIdValidator), delUserById);

export default router;