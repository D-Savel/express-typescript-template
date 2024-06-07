import express from "express";
import createUser from "../../controllers/user/createUser";
import validate from "../../middlewares/validation/validationMiddleware";
import { userValidator } from "../../validators/userValidator";
// import {...} from "../controllers/...";

const router = express.Router();

/* /create/user POST */
router.post("/users/creer", validate(userValidator),
  createUser);

export default router;


