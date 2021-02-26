module.exports = (app) => {
  const controller = require('./controller');

  // app.get('/', (req, res) => {
  //   res.send(`
  //       - /getBuku <br>
  //       - /getAnggota <br>
  //       - /getPetugas <br>
  //       - /getLokasi <br>
  //       - /getTransaksi <br>
  //   `);
  // });

  app.get('/getTransaksi', controller.get.getTransaksi);
  app.post('/getAuth', controller.post.getAuth);

  app.get('/getKostumer', controller.get.getKostumer);
  app.delete('/delKostumer/:id', controller.delete.delKostumer);
  app.post('/addKostumer', controller.post.addKostumer);
  app.put('/putKostumer/:id', controller.put.putKostumer);

  app.get('/getMobil', controller.get.getMobil);
  app.delete('/delMobil/:id', controller.delete.delMobil);
  app.post('/addMobil', controller.post.addMobil);
  app.put('/putMobil/:id', controller.put.putMobil);
};
