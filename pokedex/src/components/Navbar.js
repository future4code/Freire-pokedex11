import React, { useContext } from "react";
import imgLogo from "./imgLogo/logo.png";
import FavoriteContext from "../contexts/favoritesContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  const goToPokedex = () => {
    navigate('pokedex')
  }

  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav>
      <div>
        <img className="navbar-logo" src={imgLogo} alt="logo" />
      </div>
      <div>{favoritePokemons.length} ❤️ Favoritos</div>
      <button className="minhapokedex" onClick={goToPokedex}>
        Minha Pokedex
      </button>
    </nav>
  );
};

export default Navbar;
