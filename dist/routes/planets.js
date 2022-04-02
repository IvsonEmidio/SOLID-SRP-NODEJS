"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planetsController_1 = __importDefault(require("../controllers/planetsController"));
const planetsController = new planetsController_1.default();
function planetRoutes(app) {
    app.get('/api/planet/:id', (req, res) => {
        let parseReceivedID = parseInt(req.params.id);
        let planet = planetsController.get(parseReceivedID);
        res.send(planet);
    });
}
exports.default = planetRoutes;
