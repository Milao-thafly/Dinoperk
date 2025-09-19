import { Controller } from "../libs/Controller"
import { registerSchema } from "../libs/schema/RegisterSchema"


export class RegisterController extends Controller {

    public async registerSubmission() {

        const registerData = {
            id_user: this.request.body?.id_user,
            user_name: this.request.body?.username,
            email: this.request.body?.email,
            age: this.request.body?.age,
            reservation: this.request.body?.reservation,
        };
        
        const validation = registerSchema.safeParse(registerData)
    }

    public RegisterRender(){
        
        this.response.render("pages/register.ejs")
    }
}