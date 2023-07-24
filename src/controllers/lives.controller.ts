import { BaseController } from "@controllers/base.controller";
import { NextFunction, Request, Response } from "express";

export class LivesController extends BaseController {
    public constructor() {
        super('/lives');
        this.initRoutes()
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.getAll);
        this.router.get(`${this.path}/conditions`, this.getConditions);
    }

    public getAll = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const res = await this.pg.pool.query(
                'SELECT * FROM lives'
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }

    public getConditions = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const res = await this.pg.pool.query(
                'SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat'
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }
}