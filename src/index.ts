import { App } from "./app";
import { configDotenv } from "dotenv";

configDotenv();

const app = new App([]);

app.listen();

module.exports = app;