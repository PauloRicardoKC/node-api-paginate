import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

class App {

    constructor() {
        this.server = express();

        //conecta com o banco
        mongoose.connect('mongodb://localhost:27017/truckdb', { useNewUrlParser: true, useUnifiedTopology: true });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());       
    }

    routes() {
        this.server.use("/api", routes);
    }
}

export default new App().server;