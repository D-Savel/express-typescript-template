import express from "express";

import userController from "../../controllers/api/users/getUsers";
// import {...} from "../controllers/...";

const router = express.Router();

/** GET Methods */
/**
  * @openapi
  * '/api/users':
  *  get:
  *     tags:
  *       - API User controller
  *     summary: Get users
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
router.get('/api/users', userController);

// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


export default router;