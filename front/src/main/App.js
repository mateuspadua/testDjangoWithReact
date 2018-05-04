import React, { Component } from 'react';
import '../static/css/bootstrap.css'
import '../static/css/w3-css.css'
import '../static/css/style.css'

import Nave from '../components/Naves'
import Personagem from '../components/Personagem'

import navesimg from '../static/img/naves.png'
import logo from '../static/img/logo.png'
import bars from '../static/img/bars.png'
import borda from '../static/img/borda.png'
import chart from '../static/img/chart.png'
import dashboard from '../static/img/dashboard.png'
import email from '../static/img/email.png'
import filmes from '../static/img/filmes.png'
import lua from '../static/img/lua.png'
import notification from '../static/img/notification.png'
import perfil from '../static/img/perfil.png'
import personagens from '../static/img/personagens.png'
import planetas from '../static/img/planetas.png'


class App extends Component {
    render() {
        return (
            <React.Fragment>

                <div class="side-max w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left " id="mySidebar">
                    <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button>
                    <div id="side-menu">
                        <center>
                        <img src={logo} alt="Menu" className="side-menu-img"/>
                            <hr className="hr-side"/>

                            <img src={dashboard} alt="arrumar"  className="side-menu-img"/>
                            <p className="side-title">Dashboard</p>

                            <img src={personagens} alt="arrumar"  className="side-menu-img"/>
                            <p>Personagens</p>

                            <img src={planetas} alt="arrumar"  className="side-menu-img"/>
                            <p>Planetas e luas</p>

                            <img src={navesimg} alt="arrumar"  className="side-menu-img"/>
                            <p>Naves espaciais</p>

                            <img src={filmes} alt="arrumar"  className="side-menu-img"/>
                            <p>Filmes</p>
                        </center>
                    </div>
                </div>

                <div className="w3-main" style= {{marginLeft : 170}}>
                    <div class="w3-teal">
                    <button class="w3-button w3-teal w3-xlarge w3-hide-large" onclick="w3_open()">&#9776;</button>
                    </div>

                    <div id="top-menu">
                        <nav>
                            <div className="nav-wrapper">

                                <div className="top-menu-conteudo" >
                                    <img src={notification} className="top-menu" />
                                    <img src={email} className="top-menu"/>
                                    <img src={borda}alt="arrumar" className="top-menu"/>
                                    <img src={perfil} alt="arrumar" className="top-menu"/>
                                        Luke Skywalker
                                    <i className="fas fa-chevron-down fa-1x"></i>
                                    <img src={borda} alt="arrumar" className="top-menu"/>
                                    <img src={bars} alt="arrumar"/>
                                </div>

                            </div>
                        </nav>
                    </div>

                    <div className="top-menu2">
                        <h2>Dashboard</h2>
                        <p>Página Inicial > Dashboard</p>
                    </div>

                    <div className="contenido">
                        <div className="col-md-8">

                            <div className="col-md-4s">
                                <div className="boxes">
                                    <div className="col-xs-9">
                                        <h2>30</h2>
                                        <p>Personagens</p>
                                    </div>
                                    <div class="col-xs-3">
                                        <img src={personagens} alt="arrumar" className="img-boxes"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5s">
                                <div className="boxes">
                                    <div className="col-xs-4">
                                        <h2>52</h2>
                                        <p>Planetas</p>
                                    </div>

                                    <div class="col-xs-3">
                                        <img src={planetas} alt="arrumar" className="img-boxes"/>
                                        <hr size="30px" width="1" color="#ddd"/>
                                    </div>

                                    <div className="borda"></div>

                                    <div className="col-xs-2">
                                        <h2>8</h2>
                                        <p>Luas</p>
                                    </div>

                                    <div className="col-xs-3">
                                        <img src={lua} alt="arrumar" className="img-boxes"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4s">
                                <Nave/>
                            </div>

                            <div className="col-md-12 ">
                                <Personagem/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="chart">
                                <p>
                                    5 maiores bilheterias de Star Wars
                                    <img src={chart} alt="arrumar" align="left"/>
                                </p>
                                <hr width="80%" align="center"/>
                                <div className="graficpizza2" id="GraficoPizza"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default App;
