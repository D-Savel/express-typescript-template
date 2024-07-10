import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { createUsersValidator } from "../../validators/users/createUsersValidator";
import createUser from "../../controllers/api/users/createUser";
// import {...} from "../controllers/...";

const router = express.Router();

/** POST Methods */
/**
* @openapi
* '/api/users/create':
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
*                default: Johnny 
*              email:
*                type: string
*                default: johnnye@mail.com
*              password:
*                type: string
*                default: johnny20!@
*     responses:
*         201:
*           description: Return created user
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/CreatedUserResponse'
*         404:
*           description: Route not found
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Error404Response'
*         422:
*           description: Unprocessable Entity (bad body parameters for request). Response example for these parameters => empty username and email parameter = johnny@mail
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/ErrorBodyResponse'
*         500:
*           description: Node Server Error
*           content:
*             application/json:
*              schema:
*                $ref: '#/components/schemas/Error500'
* components:
*  schemas:
*    CreatedUser:
*      type: object
*      properties:
*        id:
*          type: string
*          example: new random uuid
*        username:
*          type: string
*          example: Jhonny
*        email:
*          type: string
*          example: johnnye@mail.com
*        password:
*          type: string
*          example: johnny20!@
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
*    CreatedUserResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'success'
*        message:
*          type: string
*          example: 'User Jhonny successfully created'
*        data:
*          type: object
*          $ref: '#/components/schemas/CreatedUser'
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
*    ErrorBodyResponse:
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
*           - type: "field"
*             value: ''
*             msg: "username is required"
*             path: "username"
*             location:: "body"
*           - type: "field"
*             value: "johnnye@mail"
*             msg: "Please provide valid email"
*             path: "email"
*             location:: "body"
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

router.post('/api/users/create', validate(createUsersValidator), createUser);

export default router;


