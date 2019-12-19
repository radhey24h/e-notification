import { ResultController } from '../controllers/result.controller'
import express = require('express');

export class ResultRoutes {

    resultController: ResultController = new ResultController();

    public routes(app: express.Application): void {
        app.route('/api/getResult/:id').get(this.resultController.getResult);
        app.route('/api/getAllResult').get(this.resultController.getAllResult);
        app.route('/api/updateResult').put(this.resultController.updateResult);
        app.route('/api/addResult').post(this.resultController.addResult);
        app.route('/api/deleteResult').post(this.resultController.deleteResult);
    }
}