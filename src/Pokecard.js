import React, { Component } from "react";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let makeThreeDigits = num => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}${makeThreeDigits(id)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <img src={imgSrc} alt={name} />
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
