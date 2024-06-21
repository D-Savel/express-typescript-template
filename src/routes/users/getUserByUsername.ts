import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import getUserByUsername from "../../controllers/api/users/getUserByUsername";
import { getUserByUsernameValidator } from "../../validators/users/getUserByUsernameValidator";

// import {...} from "../controllers/...";

const router = express.Router();

/** GET Methods */
/**
* @openapi
* "/api/users/user?username='usernamameQuery'":
*  get:
*    tags:
*       - API User controller
*    summary: Get user by username
*    parameters:
*      - name: username
*        in: query
*        description: The username of the user
*        type: string
*        default: John
*        required: true
*    responses:
*      200:
*        description: Return a user for username query string
*        content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/UserResponse'
*      204:
*        description: No content => No match(es) for requested data(s)
*      404:
*        description: Route not Found
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/Error404Response'
*      422:
*        description: Unprocessable Entity (bad body parameters for request). Response example for empty username parameter
*        content:
*         application/json:
*          schema:
*           $ref: '#/components/schemas/ErrorParamsUsernameResponse'
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
*    ErrorParamsUsernameResponse:
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
*            value: ''
*            msg: "username is required in query string (example: ?username='John')"
*            path: "username"
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

router.get('/api/users/user', validate(getUserByUsernameValidator), getUserByUsername);

// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


export default router;