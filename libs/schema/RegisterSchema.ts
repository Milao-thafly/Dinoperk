import { z } from "zod";

export const registerSchema = z.object({
   prenom: z 
    .string()
    .min(3, "Nom trop court (minimum 3 caractères)")
    .max(50, "Nom trop long (maximum 50 caractères"),

    nom: z 
    .string()
    .min(3, "Prenom trop court (minimum 3 caractères)") 
    .max(50, "Prenom trop long (maximum 50 caractères)"),

    email: z 
    .string()
    .min(3, "Email trop court (minimum 3 caractères)")
    .max(50, "Email trop long (maximum 50 caractères)"),

    password: z 
    .string()
    .min(16, "Mot de passe trop court(minimum 16 caractères")
    .max(68, "Mot de passe trop long (maximum 68 caractères)"),

    confirmPassword: z 
    .string()
    .min(16, "Mot de passe trop court(minimum 16 caractères")
    .max(68, "Mot de passe trop long (maximum 68 caractères)"),

})
export default registerSchema;