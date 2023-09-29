import app from "./app.js";
import {port} from "./config.js";

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Server successfully turned on, on port: ${port}`);
});