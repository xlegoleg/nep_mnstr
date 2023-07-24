import express, { Router } from "express";
import IController from "../types/eva/controller.interface";
import { pgDB } from "@db/postgres";

export abstract class BaseController implements IController {
    private _router: Router = express.Router();
    private _pg = pgDB;
    private readonly _path: string;


    protected constructor(path: string) {
        this._path = path;
    }

    public get pg() {
        return this._pg;
    }

    public get path(): string {
        return this._path;
    }

    public get router(): Router {
        return this._router;
    }
}