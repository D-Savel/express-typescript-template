import express, { NextFunction, Request, Response } from "express";

import getUsers from "../../controllers/api/users/getUsers";
import getUsersByQueryString from "../../controllers/api/users/getUsersByQueryString";
import validate from "../../middlewares/validation/validationMiddleware";
import { getUserByValidator } from "../../validators/users/getUserByValidator";
import isQueryString from "../../middlewares/users/isQueryString";
import { ValidationChain } from "express-validator";
const router = express.Router();

/** GET Methods */
/**
* @openapi
* paths:
*   '/api/users':
*     get:
*       tags:
*         - API User controller
*       summary: Get users
*       responses:
*         200:
*           description: Return a list of users
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/GetUsersResponse'
*         404:
*           description: Route not found
*           content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Error404Response'
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
*    GetUsersResponse:
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



// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


//Apply isQueryString middleware to redirect query string request

router.get('/api/users', isQueryString, validate(getUserByValidator as unknown as ValidationChain[]), getUsersByQueryString);



export default router;