import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
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
*           description: Return updated user
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/DeletedUser'
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
*    DeletedUser:
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
*          example:
*           - id: '196cab8b-0284-4d0a-85c6-d171051b8966'
*             username: 'updatedUsername'
*             email: 'updatedUsername@mail.com'
*             password: 'updatedPassword'
*        errors:
*          type: string
*          example: 'null'
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

router.put('/api/users/:id', validate(updateUserValidator), updateUserById);

export default router;