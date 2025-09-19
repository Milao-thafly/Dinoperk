import { Controller } from "../libs/Controller"

export class ContactController extends Controller {
    public contactRender() {
        this.response.render("pages/contact.ejs")
    }
}