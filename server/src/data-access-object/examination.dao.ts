import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { Examination } from '../models/examination';

export class ExaminationDAO {

    getAllExamination(req: Request, res: Response, next: NextFunction) {
        Examination.find({}, (error: Error, Examinations: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(Examinations);
        });
    }

    getExamination(req: Request, res: Response, next: NextFunction) {
        let examination = Examination.findById(req.params.id, (err: any, Examination: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(Examination);
            }
        });
    }

    addExamination(req: Request, res: Response, next: NextFunction) {
        const examination = new Examination(req.body);
        examination.save((error: Error, pokemon: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    }

    updateExamination(req: Request, res: Response, next: NextFunction) {
        const examinationId = req.params.id;
        Examination.findByIdAndUpdate(
            examinationId,
            req.body,
            (error: Error, Examination: any) => {
                if (error) {
                    res.send(error);
                }
                const message = Examination
                    ? 'Updated successfully'
                    : 'Examination not found :(';
                res.send(message);
            }
        );
    }

    deleteExamination(req: Request, res: Response, next: NextFunction) {
        const examinationID = req.params.id;
        Examination.findByIdAndDelete(examinationID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Examinations not found :(';
            res.send(message);
        });
    }
}
