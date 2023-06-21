"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const router = express_1.default.Router();
//unsure what this middleware does
router.use(express_1.default.json());
router.get('/songs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songs = yield (0, db_1.getAllSongs)();
        res.json(songs);
    }
    catch (_a) {
        res.sendStatus(404);
    }
}));
router.get('/songs/song/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const song = yield (0, db_1.getSongById)(id);
        res.json(song);
    }
    catch (_b) {
        res.sendStatus(404);
    }
}));
router.get('/songs/by/:artist', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artist = req.params.artist;
    try {
        const song = yield (0, db_1.getSongsByArtist)(artist);
        res.json(song);
    }
    catch (_c) {
        res.sendStatus(404);
    }
}));
router.get('/songs/prod/:producer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producer = req.params.producer;
    try {
        const song = yield (0, db_1.getSongsByProducer)(producer);
        res.json(song);
    }
    catch (_d) {
        res.sendStatus(404);
    }
}));
router.post('/songs/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const returnObj = yield (0, db_1.addNewSong)(data);
        res.json(returnObj);
    }
    catch (_e) {
        res.sendStatus(404);
    }
}));
exports.default = router;
