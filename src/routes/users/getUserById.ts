import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import getUserById from "../../controllers/api/users/getUserById";
import { getUserByIdValidator } from "../../validators/users/getUserByIdValidator";
// import {...} from "../controllers/...";
// import {...Validator} from "../validators/...";

const router = express.Router();

/** GET Methods */
/**
* @openapi
* '/api/users/user/{id}':
*  get:
*     tags:
*       - API User controller
*     summary: Get user by id
*     parameters:
*      - name: id
*        in: path
*        description: The user ID
*        type: string
*        default: 6127b1a7-edf4-491f-af40-ea5b9495d3d8
*        required: true
*     responses:
*      200:
*        description: Fetched Successfully
*      400:
*        description: Bad Request
*      404:
*        description: Not Found
*      500:
*        description: Server Error
*/
router.get('/api/users/user/:id', validate(getUserByIdValidator), getUserById);

export default router;