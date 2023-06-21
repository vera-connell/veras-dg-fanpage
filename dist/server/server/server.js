"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dgRoutes_1 = __importDefault(require("./routes/dgRoutes"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use('/api/v1/dg', dgRoutes_1.default);
exports.default = server;
