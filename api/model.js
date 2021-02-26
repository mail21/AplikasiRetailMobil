const knex = require('knex');
const koneksi = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'penyewaanmobilptismailmobilindo',
  },
});

module.exports = koneksi;
