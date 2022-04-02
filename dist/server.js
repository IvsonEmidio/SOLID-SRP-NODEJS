"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planets_1 = __importDefault(require("./routes/planets"));
const app = express_1.default();
planets_1.default(app);
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
