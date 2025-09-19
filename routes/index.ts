import { Router } from "express";
import globalRouter from "./global";
import mapRouter from "./maprout";
import placesRouter from "./places"; 
import registerRouter from "./register";
import loginRouter from "./login";
import paymentRouter from "./payment";
import contactRouter from "./contact"


const router = Router();

router.use(globalRouter);
router.use(mapRouter);
router.use(placesRouter);
router.use(registerRouter);
router.use(loginRouter);
router.use(paymentRouter);
router.use(contactRouter);



export default router;