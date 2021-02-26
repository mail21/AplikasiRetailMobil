const table = require('./model');

module.exports = {
  get: {
    getTransaksi: async (req, res) => {
      const query = table.select('*').from('transaksi');
      const result = await query.then((data) => data);
      res.json(result);
    },
    getKostumer: async (req, res) => {
      const query = table.select('*').from('kostumer');
      const result = await query.then((data) => data);
      res.json(result);
    },
    getMobil: async (req, res) => {
      const query = table.select('*').from('mobil');
      const result = await query.then((data) => data);
      res.json(result);
    },
  },
  post: {
    addKostumer: async (req, res) => {
      await table('kostumer').insert(req.body).then(console.log);
      res.send('sukses');
    },
    addMobil: async (req, res) => {
      await table('mobil').insert(req.body);
      res.send('sukses');
    },
    getAuth: async (req, res) => {
      let { username, password } = req.body;
      const query = table.select('admin_username', 'admin_password').from('admin');
      const result = await query.then((data) => data);
      if (result[0].admin_username === username && result[0].admin_password === password) {
        console.log('kelar');

        res.json({ ket: true });
      } else {
        console.log('Tidak kelar');

        res.json({ ket: false });
      }
    },
  },
  delete: {
    delKostumer: async (req, res) => {
      await table('kostumer').where('kostumer_id', req.params.id).del();
    },
    delMobil: async (req, res) => {
      await table('mobil').where('mobil_id', req.params.id).del();
    },
  },
  put: {
    putKostumer: async (req, res) => {
      await table('kostumer').where('kostumer_id', req.params.id).update(req.body);
    },
    putMobil: async (req, res) => {
      await table('mobil').where('mobil_id', req.params.id).update(req.body);
    },
  },
};
