import { Controller } from "../libs/Controller"

export class LoginController extends Controller {
    public loginRender() {
    this.response.render("pages/login.ejs")

    }
}