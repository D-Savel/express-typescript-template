import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { createUsersValidator } from "../../validators/users/createUsersValidator";
import createUser from "../../controllers/api/users/createUser";
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
*                default: Johnny 
*              email:
*                type: string
*                default: johnnye@mail.com
*              password:
*                type: string
*                default: johnny20!@
*     responses:
*         200:
*           description: Return a list of users with new user created
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/CreateUsersResponse'
*         404:
*           description: Route not found
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Error404Response'
*         422:
*           description: Unprocessable Entity (bad body parameters for request). Response example for these parameters => empty username and email parameter = johnnye@mail
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
*    User:
*      type: object
*      properties:
*        id:
*          type: string
*        username:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
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
*    CreateUsersResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'success'
*        message:
*          type: string
*          example: 'Users list successfully retrieved'
*        data:
*          type: array
*          items:
*             $ref: '#/components/schemas/User'
* 
*          example:
*           - id: '6127b1a7-edf4-491f-af40-ea5b9495d3d8'
*             username: 'John'
*             email: 'JDoe@me.fr'
*             password: '123Password'
*           - id: '45cc8cdc-e36e-4970-af37-fee9088e2fb0'
*             username: 'Jane'
*             email: 'JaneDoe@me.fr'
*             password: 'Password123'
*           - id: '196cab8b-0284-4d0a-85c6-d171051b8966'
*             username: 'Emma'
*             email: 'EmmaDoe@me.fr'
*             password: 'Password'
*           - id: 'New random ID'
*             username: 'Johnny'
*             email: 'johnnye@mail.com'
*             password: 'johnny20!@'
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

router.post('/api/users/creer', validate(createUsersValidator), createUser);

export default router;


