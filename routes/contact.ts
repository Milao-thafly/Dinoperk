import { Router } from "express";
import { ContactController } from "../controllers/ContactController";

const contactRouter = Router();

contactRouter.get("/contact", (request, response) => {
    const contactControl = new ContactController(request, response)
    contactControl.contactRender()
})
export default contactRouter;
