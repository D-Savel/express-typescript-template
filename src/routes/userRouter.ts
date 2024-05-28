import express from "express";

import userController from "../controllers/user/userController";
// import {...} from "../controllers/...";

const router = express.Router();

/* /users GET */


router.get("/users", userController);
// router.get("/id/:id", userByIdController);
// /* Address /adresses POST */
// router.post("/ajouter", createUserControler);
// /* Address /adresses PUT */
// router.put("/:id/modifier", updateUserController);
// /* Address /adresses DELETE */
// router.delete("/:id/supprimer", deleteUserControler);


export default router;