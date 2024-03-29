import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./global/favoritesContext";
import Router from "./router/Router";
import { FavoriteProvider } from "./contexts/favoritesContext";
import Footer from './components/Footer';


const favoritesKey = "f"
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);


 



  const itensPerPage = 24;


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };
 
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  
  useEffect(() => {
    fetchPokemons();
  }, []);
  
 

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }
  const addPokemon = (pokemonToAdd) => {
    console.log(pokemonToAdd);
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemonToAdd.name);
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id });

    const newPokedexList = [...pokedexList, pokemonToAdd];
    const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id });

    setPokedexList(orderedPokedex);
    setPokemons(orderedPokemons);
  }

  const removePokemon = (pokemonToRemove) => {
    const pokeIndex = pokedexList.findIndex((item) => item.name === pokemonToRemove.name);
    const newPokedexList = [...pokedexList];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id });

    const newPokemonsList = [...pokemons, pokemonToRemove];
    const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id });

    setPokedexList(orderedPokedex);
    setPokemons(orderedPokemons);
  }
  return (
    <>
    

    <Router
      pokedexList={pokedexList}
      addPokemon={addPokemon}
      removePokemon={removePokemon}
    />

 

  
    
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >

      <div>
        <Navbar />
        
        <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (
          <div className="not-found-text"> Eeeee Olha la, Meteu essa?! </div>
        ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
  
        />)}
        <Footer />
      </div>
    </FavoriteProvider>
     </>
     
     
   
      
  );
}

export default App;
