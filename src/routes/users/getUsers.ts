import express from "express";

import getUsers from "../../controllers/api/users/getUsers";
// import {...} from "../controllers/...";

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
*                $ref: '#/components/schemas/UsersResponse'
*         400:
*           description: Bad Request
*         404:
*           description: Not Found
*         500:
*           description: Server Error
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
*    UsersResponse:
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
*            $ref: '#/components/schemas/User'
*        errors:
*          type: string
*          example: 'null'
*/
router.get('/api/users', getUsers);

// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


export default router;