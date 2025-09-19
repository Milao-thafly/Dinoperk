import { Router } from "express";
import { LoginController } from "../controllers/LoginController";

const loginRouter = Router();

loginRouter.get("/login", (request, response) => {
    const loginControl = new LoginController(request, response);
    loginControl.loginRender()
})

export default loginRouter;