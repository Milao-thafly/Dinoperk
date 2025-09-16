import Express, { Router } from "express";
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path"

const app = Express();
const PORT = 3000;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


app.set("view engine", "ejs");

app.set("views engine", path.join(__dirname, "views"));

app.use(Express.urlencoded({ extended: true}));

app.use("/", router);

app.use(Express.static(path.join(__dirname, "public")));

app.use((req,res) => {
    res.status(404).send("Page non trouvée")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});