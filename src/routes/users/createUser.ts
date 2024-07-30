import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { createUserValidator } from "../../validators/users/createUserValidator";
import createUser from "../../controllers/api/users/createUser";
// import {...} from "../controllers/...";

const router = express.Router();

router.post('/api/users', validate(createUserValidator), createUser);

export default router;


