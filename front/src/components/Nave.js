import React, { Component } from 'react'
import axios from 'axios'
import naves from '../static/img/naves.png'

class Nave extends Component{
    state = {
        starships: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/v1/starships/count/`)
          .then(res => {
            const starships = res.data;
            this.setState({ starships });
            console.log(starships)
          })
    }

    render(){
        return(
            <div className="boxes">
                    <div className="col-xs-9">
                        <h2>{this.state.starships && this.state.starships.count}</h2>
                        <p>Naves</p>
                    </div>

                <div className="col-xs-3">
                    <img src={naves} alt="arrumar" className="img-boxes"/>
                </div>
            </div>
        )
    }
}

export default Naves
