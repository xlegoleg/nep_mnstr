import 'module-alias/register';
import { App } from "./app";
import { MonstersController } from "@controllers/monsters.controller";

const app = new App([new MonstersController()]);

app.listen();

module.exports = app;