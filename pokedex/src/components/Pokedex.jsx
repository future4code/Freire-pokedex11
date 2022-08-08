import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import React from 'react' 
import styled from "styled-components";

const Div = styled.div`
border: 1px solid black;
width: 300px;
height: 150px;
margin: 10px;
`

  const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }

  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  const pokemonsCards = props.pokedexList && props.pokedexList.map(
    pokemon => {
      return (
        
        <Div key={pokemon.name}
          pokemon={pokemon}
          textBtn1={"remover"}
          onClickBtn1={() => props.removePokemon(pokemon)}
        />
      )
      
    }
    
  )
  
  return (
    <div>
      <div className="pokedex-header">
        <h1>Todos os Pokemons </h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
            
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (

              <Pokemon key={index}  pokemon={pokemon}/>
              
            );
          })}
        </div>
      
      )}
     <div>
     {pokemonsCards}
     </div>
    </div>
  );
};

export default Pokedex;