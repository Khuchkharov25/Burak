import express from "express";

import path from "path";
/**1 Entrance **/

const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**2 Sessions **/

/**3 Views **/
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

/**4 Routers **/

export default app;