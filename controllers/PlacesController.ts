import { Controller } from "../libs/Controller";

export class PlacesController extends Controller {

    public PlacesRender(){

        this.response.render("pages/places.ejs")
    }
}