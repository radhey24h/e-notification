import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';
import { MongooseDocument } from 'mongoose';

export class UserDAO {
    
    getAllUser(req: Request, res: Response, next: NextFunction) {
        User.find({}, (error: Error, users: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(users);
        });
    }

    getUser(req: Request, res: Response, next: NextFunction) {
        let user = User.findById(req.params.id, (err: any, user: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }

    addUser(req: Request, res: Response, next: NextFunction) {
        const user = new User(req.body);
        user.save((error: Error, pokemon: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    }

    updateUser(req: Request, res: Response, next: NextFunction) {
        const userId = req.params.id;
        User.findByIdAndUpdate(
            userId,
            req.body,
            (error: Error, User: any) => {
                if (error) {
                    res.send(error);
                }
                const message = User
                    ? 'Updated successfully'
                    : 'User not found :(';
                res.send(message);
            }
        );
    }

    deleteUser(req: Request, res: Response, next: NextFunction) {
        const userID = req.params.id;
        User.findByIdAndDelete(userID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Users not found :(';
            res.send(message);
        });
    }
}
