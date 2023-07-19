import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import IController from "./types/eva/controller.interface";

export class App {
    public app: express.Application;
    private readonly port: Number;
    private readonly host_url: String;

    public constructor(controllers :IController[]) {
        this.app = express();
        this.port = config.port;
        this.host_url = config.host;

        this.initMiddleware();
        this.initControllers(controllers);
    }

    private initControllers(controllers: IController[]): void {
        controllers.forEach((controller: IController) => {
            this.app.use('/', controller.router());
        });
    }

    private initMiddleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at ${this.host_url}:${this.port}`);
        });
    }
}