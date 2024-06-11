import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { userValidator } from "../../validators/userValidator";
import userCreate from "../../controllers/api/users/createUser";
// import {...} from "../controllers/...";

const router = express.Router();

/** POST Methods */
/**
    * @openapi
    * '/api/users/creer':
    *  post:
    *     tags:
    *       - API User controller
    *     summary: Create a user
    *     requestBody:
    *      required: true
    *      content:
    *        application/json:
    *           schema:
    *            type: object
    *            required:
    *              - username
    *              - email
    *              - password
    *            properties:
    *              username:
    *                type: string
    *                default: johndoe 
    *              email:
    *                type: string
    *                default: johndoe@mail.com
    *              password:
    *                type: string
    *                default: johnDoe20!@
    *     responses:
    *      201:
    *        description: Created
    *      404:
    *        description: Not Found
    *      422:
    *        description: Unprocessable Entity (bad body parameters for request)
    *      500:
    *        description: Server Error
    */
router.post('/api/users/creer', validate(userValidator),
  userCreate);

export default router;


