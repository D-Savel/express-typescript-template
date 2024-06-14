import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { createUsersValidator } from "../../validators/users/createUsersValidator";
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
*                default: johnny 
*              email:
*                type: string
*                default: johnnye@mail.com
*              password:
*                type: string
*                default: johnny20!@
*     responses:
*      201:
*        description: Created
*        examples:
*            application/json:
*              {
*                "id": 38,
*                "title": "T-shirt"
*              }
*      404:
*        description: Not Found
*      422:
*        description: Unprocessable Entity (bad body parameters for request)
*      500:
*        description: Server Error
*/
router.post('/api/users/creer', validate(createUsersValidator), userCreate);

export default router;


