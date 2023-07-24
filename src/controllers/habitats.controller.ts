import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";

export class HabitatsController extends BaseController {
    public constructor() {
        super('/habitats');
        this.initRoutes();
    }

    /**
     * TODO, think about common init for CRUD operations with the same route structure
     */
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
                'SELECT * FROM habitats ORDER BY id ASC'
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }

    public getOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const res = await this.pg.pool.query(
                'SELECT * FROM habitats WHERE id = $1',
                [req.params.id]
            )
            resp.json(res.rows);
        } catch (e) {
            next(e);
        }
    }

    public createOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { name, climate, temperature} = req.body;
            await this.pg.pool.query(
                'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
                [name, climate, temperature]
            )
            resp.redirect(this.path);
        } catch (e) {
            next(e);
        }
    }

    public updateOne = async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { name, climate, temperature } = req.body;
            await this.pg.pool.query(
                'UPDATE habitats SET name=($1), climate=($2), temperature=($3) WHERE id=($4)',
                [name, climate, temperature, id],
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
                'DELETE FROM habitats WHERE id=($1)',
                [id],
            )
            resp.redirect(this.path);
        } catch (e) {
            next(e);
        }
    }
}