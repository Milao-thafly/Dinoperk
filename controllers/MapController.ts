import { Controller } from "../libs/Controller"

export class MapController extends Controller{
    
    public mapRender() {
        
        this.response.render("pages/map.ejs")
    }
}