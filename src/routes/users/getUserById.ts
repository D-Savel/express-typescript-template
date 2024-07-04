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
*        description: Return a user for id query path
*        content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/UserResponse'
*      400:
*        description: Bad request => No match(es) for id query path data
*      404:
*        description: Route not Found
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/Error404Response'
*      422:
*        description: Unprocessable Entity (bad body parameters for request). Response example for non uuid parameter = 6127b1a7-edf4-491f-af40-ea5b9495d3d
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/ErrorParamsIdResponse'
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
*    ParamsError:
*      type: object
*      properties:
*        type:
*          type: string
*        value:
*          type: string
*        msg:
*          type: string
*        path:
*          type: string
*        location:
*          type: string
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
*    Error404Response:
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
*    ErrorParamsIdResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'error'
*        message:
*          type: array
*          items:
*             $ref: '#/components/schemas/ParamsError'
*          example:
* 
*          - type: "field"
*            value: '6127b1a7-edf4-491f-af40-ea5b9495d3d'
*            msg: "user id is not valid, must be a UUID version 4"
*            path: "id"
*            location:: "params"
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