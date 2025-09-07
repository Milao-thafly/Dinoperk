import Express from "express";

const app = Express();

const PORT = 3000;

app.get("/", (_request, response) => {
    response.send("It time for the ritual Lord");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});