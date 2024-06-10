import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { userValidator } from "../../validators/userValidator";
import userCreate from "../../controllers/user/createUser";
// import {...} from "../controllers/...";

const router = express.Router();

/* /create/user POST */
router.post("/users/creer", validate(userValidator),
  userCreate);

export default router;


