"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planetsData_1 = __importDefault(require("../data/planetsData"));
class PlanetsService {
    constructor() {
        this.data = planetsData_1.default;
    }
    /**
     * Find an planet by id.
     * @param {number} id
     * @returns {object|string}
     */
    findByID(id) {
        let planet = this.data.find((item) => item.id === id);
        if (planet) {
            return planet;
        }
        return 'Planet not found';
    }
    /**
     * Find an planet by distance from sun.
     * @param {number} sunDistance
     * @returns {object|string}
     */
    findBySunDistance(sunDistance) {
        let planet = this.data.find((item) => item.distance_from_sun === sunDistance);
        if (planet) {
            return planet;
        }
        return 'Planet not found';
    }
}
exports.default = PlanetsService;
