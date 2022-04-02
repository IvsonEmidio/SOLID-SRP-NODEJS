import * as express from 'express';
import PlanetsController from '../controllers/planetsController';

const planetsController = new PlanetsController();

export default function planetRoutes(app: express.Application){
    app.get('/api/planet/:id', (req, res) => {
        let parseReceivedID = parseInt(req.params.id);
        let planet = planetsController.get(parseReceivedID);
        res.send(planet);
    })
}