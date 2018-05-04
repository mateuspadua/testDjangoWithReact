import React, { Component } from 'react'
import axios from 'axios'

import ficha from '../static/img/ficha.png'

class Personagem extends Component{
    
    state = {
        peoples: []
      }
        componentDidMount() {
            axios.get(`http://localhost:8000/v1/peoples/`)
              .then(res => {
                const peoples = res.data;
                this.setState({ peoples });
        })
        
    }

    render(){
        return(
            <div id="fichadospersonagens">
                <div className="tabela">
                    <p>Ficha dos personagens
                    <img src={ficha} alt="arrumar" align="left"/>
                    </p>
                    <table id="bookTable" className="tabelinha">
                        <thead>
                        <tr>
                            <th className="text-lefth">Nome</th>
                                <th>Altura</th>
                            <th>Peso</th>
                                <th>Cor do cabelo</th>
                                <th>Ano de nascimento</th>
                                <th>Planeta de nascimento</th>
                            <th>Filmes que participa</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.peoples.map(item =>(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.height}</td>
                                    <td>{item.wieght}</td>
                                    <td>{item.hair_color}</td>
                                    <td>{item.birth_year}</td>
                                    <td>{item.planet_of_birth}</td>
                                    <td>{item.films_count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>

        )
    }
}

export default Personagem
