import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import { createUsersValidator } from "../../validators/users/createUsersValidator";
import updateUserById from "../../controllers/api/users/updateUserById";
import { updateUserValidator } from "../../validators/users/updateUserByIdValidator";
// import {...} from "../controllers/...";

const router = express.Router();

/** PUT Methods */
/**
* @openapi
* '/api/users/user/{id}':
*  put:
*     tags:
*       - API User controller
*     summary: Update a user by id
*     parameters:
*      - name: id
*        in: path
*        description: The user ID
*        type: string
*        default: 196cab8b-0284-4d0a-85c6-d171051b8966
*        required: true
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*            type: object
*            properties:
*              username:
*                type: string
*                default: updatedUsername 
*              email:
*                type: string
*                default: updatedUsername@mail.com
*              password:
*                type: string
*                default: updatedPassword
*     responses:
*         201:
*           description: Return a list of users with user updated for id query path
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/UpdatedUsersResponse'
*         400:
*           description: Bad request => No match(es) for id query path data
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
*    UpdatedUsersResponse:
*      type: object
*      properties:
*        status:
*          type: string
*          example: 'success'
*        message:
*          type: string
*          example: 'updated Users list successfully retrieved'
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
*             username: 'updatedUsername'
*             email: 'updatedUsername@mail.com'
*             password: 'updatedPassword'
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

router.put('/api/users/user/:id', validate(updateUserValidator), updateUserById);

export default router;