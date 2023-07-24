import express from "express";
import bodyParser from "body-parser";
import IController from "./types/eva/controller.interface";
import { APP_CONFIG } from "@config/index";
import { pgDB } from "@db/postgres";
import { defaultErrorHandler } from "./middleware/error-handler.middleware";

export class App {
    public app: express.Application;
    private readonly port: number;
    private readonly host_url?: string;

    public constructor(controllers :IController[]) {
        this.app = express();
        this.port = Number(APP_CONFIG.APP_PORT);
        this.host_url = APP_CONFIG.APP_HOST_URL;

        this.initMiddleware();
        this.initControllers(controllers);
        this.initDataBases();
    }

    private initDataBases(): void {
        try {
            pgDB.connect();
        } catch (e) {
            console.log('An error occurred while connecting PostgresSQL')
        }
    }

    private initControllers(controllers: IController[]): void {
        controllers.forEach((controller: IController) => {
            this.app.use('/', controller.router);
        });
    }

    private initMiddleware(): void {
        this.app.use(defaultErrorHandler);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }

    public listen(): void {
        try {
            if (this.host_url && this.port) {
                this.app.listen(this.port, this.host_url, () => {
                    console.log(`⚡️[App]: Server is running at ${this.host_url}:${this.port}`);
                });
            } else {
                console.log(`⚡️[App]: Cannot run server at ${this.host_url}:${this.port}`);
            }
        } catch (e) {
            console.log(`⚡️[App]: An error occurred while running the server`, e);
        }
    }
}