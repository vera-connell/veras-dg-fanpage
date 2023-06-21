"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewSong = exports.getSongsByProducer = exports.getSongsByArtist = exports.getSongById = exports.getAllSongs = void 0;
const connection_1 = __importDefault(require("./connection"));
function getAllSongs() {
    return (0, connection_1.default)('songs').select();
}
exports.getAllSongs = getAllSongs;
function getSongById(id) {
    return (0, connection_1.default)('songs').select().where({ id });
}
exports.getSongById = getSongById;
function getSongsByArtist(artist) {
    return (0, connection_1.default)('songs').select().where('artist', 'like', `%${artist}%`);
}
exports.getSongsByArtist = getSongsByArtist;
function getSongsByProducer(producer) {
    return (0, connection_1.default)('songs').select().where('producer', 'like', `%${producer}%`);
}
exports.getSongsByProducer = getSongsByProducer;
function addNewSong(data) {
    return (0, connection_1.default)('songs').insert(data).returning('*');
}
exports.addNewSong = addNewSong;
