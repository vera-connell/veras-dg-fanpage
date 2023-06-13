/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
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
      title: 'mallwhore freestyle',
      artist: 'bladee',
      producer: 'ripsquadd',
      album: 'icedancer',
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
  ])
}
