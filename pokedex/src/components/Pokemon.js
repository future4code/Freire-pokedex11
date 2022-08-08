import React, { useContext } from "react";
import { typesPt, typesIcons} from "../Themes/pokemonTypeColors";
import { Tooltip } from "@chakra-ui/react";
import FavoriteContext from "../global/favoritesContext";
import { useNavigate } from 'react-router-dom';




import styled from "styled-components";

export const IconeImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10%;
     `

const Pokemon = (props) => {

  const navigate = useNavigate()

  const goToDetailPage = () => {
    navigate('detalhes/1')
  }

  const { favoritePokemons, } =
    useContext(FavoriteContext);

  const { pokemon } = props;

  // const onHeartClick = () => {
  //   updateFavoritePokemons(pokemon.name);
  // };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";


  return (

        <div className="pokemon-card">
    
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3> {pokemon.name}</h3>

          <div>#{pokemon.id}</div>
        </div>
        <button className="detalhes-card" onClick={goToDetailPage}>Detalhes</button>
        <div className="card-bottom">
          <div className="pokemon-type">
            
            <h4> tipo: </h4>

            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  <Tooltip
                    className="typesPt"
                    key={index}
                    label={typesPt[type.type.name]}
                    textTransform={"capitalize"}
                  >
                    <IconeImg src={typesIcons[type.type.name]} />
                  </Tooltip>
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={()=>props.addPokemon(pokemon)}>
            {heart}

          </button>
        </div>
      </div>
    
    </div>
        

  );

};

export default Pokemon;
