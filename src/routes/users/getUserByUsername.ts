import express from "express";
import validate from "../../middlewares/validation/validationMiddleware";
import getUserByUsername from "../../controllers/api/users/get UserByUsername";
import { getUserByUsernameValidator } from "../../validators/users/getUserByUsernameValidator";

// import {...} from "../controllers/...";

const router = express.Router();

/** GET Methods */
/**
* @openapi
* '/api/users/user':
*  get:
*     tags:
*       - API User controller
*     summary: Get user by username
*     parameters:
*      - name: username
*        in: query
*        description: The username of the user
*        type: string
*        default: John
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
router.get('/api/users/user', validate(getUserByUsernameValidator), getUserByUsername);

// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


export default router;