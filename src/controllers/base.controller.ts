import express, { Router } from "express";
import IController from "../types/eva/controller.interface";
import { PGDB } from "@db/postgres";

export abstract class BaseController implements IController {
    protected _router: Router = express.Router();
    protected _pg = PGDB
    private readonly _path: string;


    protected constructor(path: string) {
        this._path = path;
    }

    public path(): string {
        return this._path;
    }

    public router(): Router {
        return this._router;
    }
}