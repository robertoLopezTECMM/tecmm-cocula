import React, { Component } from 'react';

import MenuCentral from './menuCentral.js'
import Footer from './footer.js'
import './styles/bolsaTrabajoTecmm.css';

class Enlaces extends Component {

  constructor(props){
    super();
    this.state={

    }
  }

  render() {

     return (
       <div className="div-principalBolsaTrabajoTecmm">
        <MenuCentral/>
          <h1>Bolsa de Trabajo TECMM</h1>
          <div className="div-cardsVacantes">
            <div class="ui card">
              <div class="image"><img src="https://tecmm.edu.mx/imagesReact/images/vacanteBolsaTrabajo.webp"/></div>
              <div class="content">
                <div class="header">Radio Ameca de Occidente S.A de C.V</div>
                <div class="meta"><span class="date">ejecutivo de ventas</span></div>
                <div class="description">facilidad de palabra, atención a clientes, conocimientos básicos de computación y administrativos</div>
              </div>
              <div class="extra content">

                <a>
                <i aria-hidden="true" class="user icon"></i>
                Sara Preciado Caro<br/>
                </a>

                <a>
                <i aria-hidden="true" class="mail icon"></i>
                mercadotecnia_lalider@hotmail.com
                </a>

                <a>
                <i aria-hidden="true" class="phone square icon"></i>
                375 758 52 90
                </a>

              </div>
            </div>
          </div>
        <Footer/>
       </div>
     );
   }
 }

export default Enlaces;
