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
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex('songs').del();
        yield knex('songs').insert([
            {
                id: 1,
                title: 'obedient',
                artist: 'bladee & ekko2k',
                producer: 'whitearmor',
                album: 'red light',
            },
            {
                id: 2,
                title: 'be nice 2 me',
                artist: 'bladee',
                producer: 'ripsquadd',
                album: 'icedancer',
            },
            { id: 3, title: 'peroxide', artist: 'ekko2k', producer: 'gud', album: 'e' },
            {
                id: 4,
                title: 'security!',
                artist: 'ekko2k',
                producer: 'mechatok',
                album: 'e',
            },
            {
                id: 5,
                title: 'who goes there?',
                artist: 'bladee',
                producer: 'whitearmor',
                album: 'eversince',
            },
            {
                id: 6,
                title: 'lip service',
                artist: 'thaiboy digital & ekko2k',
                producer: 'gud',
                album: 'legendary member',
            },
            {
                id: 7,
                title: 'haters broke',
                artist: 'thaiboy digital',
                producer: 'gud & whitearmor',
                album: 'tiger',
            },
            {
                id: 8,
                title: 'hotel breakfast',
                artist: 'bladee',
                producer: 'ripsquadd',
                album: 'the fool',
            },
            {
                id: 9,
                title: 'girls just want to have fun',
                artist: 'bladee & ekko2k',
                producer: 'whitearmor',
                album: 'crest',
            },
            {
                id: 10,
                title: 'hold me down like gravity',
                artist: 'ekko2k',
                producer: 'whitearmor & yung sherman',
                album: 'single',
            },
        ]);
    });
};
