import express from "express";

import expressStatusController from "../../controllers/express/expressStatus";
// import {...} from "../controllers/...";

const router = express.Router();

/** GET Methods */
/**
    * @openapi
    * '/':
    *  get:
    *     tags:
    *     - express controller
    *     summary: express startup message
 *     responses:
 *      200:
 *        description: express server strarted
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get('/', expressStatusController);


export default router;