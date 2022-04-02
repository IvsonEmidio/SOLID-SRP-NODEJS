"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planetsService_1 = __importDefault(require("../services/planetsService"));
class PlanetsController extends planetsService_1.default {
    get(id) {
        return this.findByID(id);
    }
}
exports.default = PlanetsController;
