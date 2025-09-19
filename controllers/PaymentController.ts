import { Controller } from "../libs/Controller";

export class PaymentController extends Controller{
    public PaymentRender() {
        this.response.render("pages/payment.ejs")
    }
}