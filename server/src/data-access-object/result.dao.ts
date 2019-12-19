import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { Result } from '../models/result';

export class ResultDAO {

    getAllResult(req: Request, res: Response, next: NextFunction) {
        Result.find({}, (error: Error, results: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(results);
        });
    }

    getResult(req: Request, res: Response, next: NextFunction) {
        let result = Result.findById(req.params.id, (err: any, result: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }

    addResult(req: Request, res: Response, next: NextFunction) {
        const result = new Result(req.body);
        result.save((error: Error, result: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(result);
        });
    }

    updateResult(req: Request, res: Response, next: NextFunction) {
        const resultsId = req.params.id;
        Result.findByIdAndUpdate(
            resultsId,
            req.body,
            (error: Error, Results: any) => {
                if (error) {
                    res.send(error);
                }
                const message = Results
                    ? 'Updated successfully'
                    : 'Results not found :(';
                res.send(message);
            }
        );
    }

    deleteResult(req: Request, res: Response, next: NextFunction) {
        const resultId = req.params.id;
        Result.findByIdAndDelete(resultId, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Result not found :(';
            res.send(message);
        });
    }
}
