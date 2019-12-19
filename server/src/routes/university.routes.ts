import { UniversityController } from '../controllers/university.controller'
import express = require('express');

export class UniversityRoutes {

    universityController: UniversityController = new UniversityController();

    public routes(app: express.Application): void {
        app.route('/api/getUniversity/:id').get(this.universityController.getUniversity);
        app.route('/api/getAllUniversity').get(this.universityController.getAllUniversity);
        app.route('/api/updateUniversity').put(this.universityController.updateUniversity);
        app.route('/api/addUniversity').post(this.universityController.addUniversity);
        app.route('/api/deleteUniversity').post(this.universityController.deleteUniversity);
    }
}