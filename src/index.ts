import { App } from "./app";
import { FortunesController } from "./controllers/fortunes.controller";

const app = new App([new FortunesController()]);

app.listen();

module.exports = app;