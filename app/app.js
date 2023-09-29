import express from "express";
const app = express();
import EjsLayouts from "express-ejs-layouts";
import path from "path";
const __dirname = path.resolve;

//views engine
app.set("view engine", "ejs");
app.set("vies", path.join(`${__dirname}/views`));

//set layouts
app.use(EjsLayouts);
app.set("layout", "../views/layouts/main.ejs");

export default app;