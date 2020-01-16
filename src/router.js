import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'


import Landing from './componentes/landing.js';
import OfertaAcademica from './componentes/ofertaAcademica.js';
import Rectoria from './componentes/rectoria.js';
import BolsaTrabajoTecmm from './componentes/bolsaTrabajoTecmm.js';

import ComponentePrueba from './componentes/componentePrueba.js';


class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/ofertaAcademica" component={OfertaAcademica}/>
            <Route path="/componentePrueba" component={ComponentePrueba}/>
            <Route path="/rectoria" component={Rectoria}/>
            <Route path="/bolsaTrabajoTecmm" component={BolsaTrabajoTecmm}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;
