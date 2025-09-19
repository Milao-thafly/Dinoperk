import { Router } from "express"
import { PaymentController } from "../controllers/PaymentController"        

    const PaymentRouter = Router();

    PaymentRouter.get("/payment", (request, response) => {
        const paymentControl = new PaymentController(request, response);
        paymentControl.PaymentRender();
        
    });
    export default PaymentRouter;