import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Tabel.css';

function Tabel({ setNama, setKTP, setALamat, setTelp, setJK, setId }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/getKostumer`).then((res) => setData(res.data));
  }, [data]);

  const pilihData = (pelanggan) => {
    setId(pelanggan.kostumer_id);
    setNama(pelanggan.kostumer_nama);
    setALamat(pelanggan.kostumer_alamat);
    setKTP(pelanggan.kostumer_ktp);
    setTelp(pelanggan.kostumer_hp);
    setJK(pelanggan.kostumer_jk);
  };

  const delData = (id) => {
    axios.delete(`http://localhost:3001/delKostumer/${id}`);
  };

  return (
    <table className="table__pelanggan" border="1" cellPadding="10">
      <tr>
        <th>kostumer_id</th>
        <th>kostumer_nama</th>
        <th>kostumer_alamat</th>
        <th>kostumer_hp</th>
        <th>kostumer_jk</th>
        <th>kostumer_ktp</th>
        <th>Aksi</th>
      </tr>
      {data.map((pelanggan) => (
        <tr key={pelanggan.kostumer_id}>
          <td>{pelanggan.kostumer_id}</td>
          <td>{pelanggan.kostumer_nama}</td>
          <td>{pelanggan.kostumer_alamat}</td>
          <td>{pelanggan.kostumer_hp}</td>
          <td>{pelanggan.kostumer_jk}</td>
          <td>{pelanggan.kostumer_ktp}</td>
          <td>
            <button onClick={() => pilihData(pelanggan)}>Pilih</button>
            <button onClick={() => delData(pelanggan.kostumer_id)}>Hapus</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Tabel;
