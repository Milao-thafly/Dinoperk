import { Router } from "express";
import { RegisterController } from "../controllers/RegisterController";

const registerRouter = Router();

registerRouter.get("/register",(request, response) => {
    const regcontrol = new RegisterController(request, response);

    regcontrol.RegisterRender()
});

export default registerRouter;