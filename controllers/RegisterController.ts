import { Controller } from "../libs/Controller"

export class RegisterController extends Controller {
    public RegisterRender(){

        this.response.render("pages/register.ejs")
    }
}