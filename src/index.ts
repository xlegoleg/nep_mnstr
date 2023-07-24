import 'module-alias/register';
import { App } from "./app";
import { MonstersController } from "@controllers/monsters.controller";
import { HabitatsController } from "@controllers/habitats.controller";
import { LivesController } from "@controllers/lives.controller";

const app = new App([new MonstersController(), new HabitatsController(), new LivesController()]);

app.listen();

module.exports = app;