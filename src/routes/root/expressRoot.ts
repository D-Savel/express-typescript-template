import express from "express";

import expressStatusController from "../../controllers/express/expressStatus";
// import {...} from "../controllers/...";

const router = express.Router();

/* / GET */
router.get("/", expressStatusController);


export default router;