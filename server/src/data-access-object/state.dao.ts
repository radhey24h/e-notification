import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { State } from '../models/state';

export class StateDAO {

    getAllState(req: Request, res: Response, next: NextFunction) {
        State.find({}, (error: Error, States: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(States);
        });
    }

    getState(req: Request, res: Response, next: NextFunction) {
        let state = State.findById(req.params.id, (err: any, State: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(State);
            }
        });
    }

    addState(req: Request, res: Response, next: NextFunction) {
        const state = new State(req.body);
        state.save((error: Error, pokemon: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    }

    updateState(req: Request, res: Response, next: NextFunction) {
        const stateId = req.params.id;
        State.findByIdAndUpdate(
            stateId,
            req.body,
            (error: Error, State: any) => {
                if (error) {
                    res.send(error);
                }
                const message = State
                    ? 'Updated successfully'
                    : 'State not found :(';
                res.send(message);
            }
        );
    }

    deleteState(req: Request, res: Response, next: NextFunction) {
        const stateID = req.params.id;
        State.findByIdAndDelete(stateID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'States not found :(';
            res.send(message);
        });
    }
}
