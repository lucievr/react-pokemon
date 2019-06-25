import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h3 className="Pokedex-winner">WINNER!</h3>;
    } else {
      title = <h3 className="Pokedex-loser">LOSER!</h3>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <p>Total Experience: {this.props.exp}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
