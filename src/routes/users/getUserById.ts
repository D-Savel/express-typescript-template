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
*        description: Route not Found
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/ErrorResponse'
*      422:
*        description: Unprocessable Entity (bad body parameters for request)
*      500:
*        description: Node Server Error
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/Error500'
* components:
*  schemas:
*    User:
*      type: object
*      properties:
*        id:
*          type: string
*          example: '6127b1a7-edf4-491f-af40-ea5b9495d3d8'
*        username:
*          type: string
*          example: 'John'
*        email:
*          type: string
*          example: 'jDoe@me.fr'
*        password:
*          type: string
*          example: '123Pasword'
*    UserResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'success'
*        message:
*          type: string
*          example: 'User  info for  username: Jhon successfully retreived'
*        data:
*          type: object
*          $ref: '#/components/schemas/User'
*        errors:
*          type: string
*          example: 'null'
*    ErrorResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'error'
*        message:
*          type: string
*          example: 'Route not found'
*        data:
*          type: string
*          nullable: true
*          example: 'null'
*        error_detail:
*          type: string
*          example: "Route doesn't exist"
*    Error500:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'error'
*        message:
*          type: string
*          example: 'Node server error'
*        data:
*          type: string
*          nullable: true
*          example: 'null'
*        error_detail:
*          type: string
*          example: "Node error \n ${error.stack!}"
*/
router.get('/api/users/user/:id', validate(getUserByIdValidator), getUserById);

export default router;