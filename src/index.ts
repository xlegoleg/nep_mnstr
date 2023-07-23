import { App } from "./app";
import { PGDB } from "./db";

const app = new App([]);

app.listen();

PGDB.query('SELECT * FROM monsters')

module.exports = app;