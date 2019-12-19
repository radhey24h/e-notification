import express from 'express';
import bodyParser from 'body-parser';
import { RestRouter } from './routes/index'
import errorHandler from './utilities/error.handler';
import mongoose from 'mongoose';
import { MongosDB } from './configuration/app-settings'
class App {

    public app: express.Application;
    public router: RestRouter = new RestRouter();

    constructor() {
        this.app = express();

        this.connectToTheDatabase();
        this.crossOriginConfiguration();
        this.initializeMiddlewares();
        this.router.routes(this.app)
        this.initializeErrorHandling()
    }

    private crossOriginConfiguration(): void {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
            next();
        });
    }
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private initializeErrorHandling() {
        this.app.use(errorHandler);
    }
    private connectToTheDatabase() {
        // mongoose.Promise = global.Promise;
        // //using our constant instead of the hard coded String
        // mongoose.connect(MongosDB.URL, {
        //     useNewUrlParser: true
        // });
        mongoose.connect(MongosDB.URL,{useNewUrlParser: true, useUnifiedTopology: true}, (err: any) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Successfully db Connected!");
            }
        });
    }
}

export default new App().app;