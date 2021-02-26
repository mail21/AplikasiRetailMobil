import React from 'react';
import './App.css';
import FormPelangganPages from './pages/FormPelangganPages/FormPelangganPages';
import FormMobilPages from './pages/FormMobilPages/FormMobilPages';
import LoginPages from './pages/LoginPages/LoginPages';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pelanggan" component={FormPelangganPages} />
        <Route exact path="/mobil" component={FormMobilPages} />
        <Route exact path="/login" component={LoginPages} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
