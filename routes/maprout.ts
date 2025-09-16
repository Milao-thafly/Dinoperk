import { Router } from "express";
import { MapController } from "../controllers/MapController";

const mapRouter = Router();

mapRouter.get("/map", (request, response) => {
    const mapcontrol = new MapController(request, response);
    mapcontrol.mapRender()
} )

export default mapRouter;