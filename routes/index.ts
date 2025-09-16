import { Router } from "express";
import globalRouter from "./global";
import mapRouter from "./maprout";
import placesRouter from "./places"; 
import registerRouter from "./register";


const router = Router();

router.use(globalRouter);
router.use(mapRouter);
router.use(placesRouter);
router.use(registerRouter);

export default router;