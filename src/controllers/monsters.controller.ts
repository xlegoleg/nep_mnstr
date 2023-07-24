import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";

export class MonstersController extends BaseController {
    public constructor() {
        super('/monsters');
        this.initRoutes();
    }

    protected initRoutes() {
        this.router.get(`${this.path}`, this.getAll);
        this.router.post(`${this.path}`, this.createOne);
        this.router.get(`${this.path}/:id`, this.getOne)
        this.router.put(`${this.path}/:id`, this.updateOne)
        this.router.delete(`${this.path}/:id`, this.deleteOne)
    }

    public getAll = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const res = await this.pg.pool.query(
                'SELECT * FROM monsters ORDER BY id ASC'
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }

    public getOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const res = await this.pg.pool.query(
                'SELECT * FROM monsters WHERE id = $1',
                [req.params.id]
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }

    public createOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { name, personality } = req.body;
            await this.pg.pool.query(
                'INSERT INTO monsters(name, personality) VALUES($1, $2)',
                [name, personality]
            )
            resp.redirect(this.path);
        } catch (e) {
            next(e);
        }
    }

    public updateOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { name, personality } = req.body;
            await this.pg.pool.query(
                'UPDATE monsters SET name=($1), personality=($2) WHERE id=($3)',
                [name, personality, id],
            )
            resp.redirect(this.path);
        } catch (e) {
            next(e);
        }
    }

    public deleteOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            await this.pg.pool.query(
                'DELETE FROM monsters WHERE id=($1)',
                [id],
            )
            resp.redirect(this.path);
        } catch (e) {
            next(e);
        }
    }
}