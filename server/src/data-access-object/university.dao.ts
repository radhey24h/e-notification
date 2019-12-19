import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { University } from '../models/university';

export class UniversityDAO {

    getAllUniversity(req: Request, res: Response, next: NextFunction) {
        University.find({}, (error: Error, Universitys: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(Universitys);
        });
    }

    getUniversity(req: Request, res: Response, next: NextFunction) {
        let university = University.findById(req.params.id, (err: any, University: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(University);
            }
        });
    }

    addUniversity(req: Request, res: Response, next: NextFunction) {
        const university = new University(req.body);
        university.save((error: Error, pokemon: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    }

    updateUniversity(req: Request, res: Response, next: NextFunction) {
        const universityId = req.params.id;
        University.findByIdAndUpdate(
            universityId,
            req.body,
            (error: Error, University: any) => {
                if (error) {
                    res.send(error);
                }
                const message = University
                    ? 'Updated successfully'
                    : 'University not found :(';
                res.send(message);
            }
        );
    }

    deleteUniversity(req: Request, res: Response, next: NextFunction) {
        const universityId = req.params.id;
        University.findByIdAndDelete(universityId, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Universitys not found :(';
            res.send(message);
        });
    }
}
