import { Router } from "express";
import { PlacesController } from "../controllers/PlacesController";

const placesRouter = Router();

placesRouter.get("/places", (request, response) => {
    const placesControl = new PlacesController(request, response);
    placesControl.PlacesRender()
})

export default placesRouter;