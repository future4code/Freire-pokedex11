import { GlobalStyled, Header, Container, DetalhesPokemon, DetalhesBox, FotoTitulo, Fotos, BaseStatsBox, ColunaTres } from './styled';
import Voltar from '../../assets/vectors/seta-voltar.png';
import Logo from '../../assets/images/logo.png';
import BaseStats from '../../components/BaseStats/BaseStats';
import Type from '../../components/Type/Type';
import Moves from '../../components/Moves/Moves';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();

  const [ pokemon, setPokemon ] = useState({});
  const [ loading, setLoading ] = useState(true);

  const navigate = useNavigate()

  const goToIndex = () => {
    navigate('/')
  }

  const handlePokemonDetails = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    axios.get(url)
    .then((sucess) => {
      setPokemon(sucess.data)
      console.log(sucess.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    handlePokemonDetails()
  },[])
  
  return (
      <div>
        <GlobalStyled/>
        <Header>
          <div onClick={goToIndex}>
            <img src={Voltar} alt='seta voltar'/>
            <p><u> Todos os Pokémons </u></p>
          </div>
          <img src={Logo} alt='Logo Pokemón' />
          <button> Excluir da Pokédex </button>
        </Header>
        <Container>
          <h2> Detalhes </h2>
          <DetalhesPokemon>
            {!loading && <FotoTitulo src={pokemon.sprites.other.dream_world.front_default} alt='Imagem do Pokemon'/>}
            <DetalhesBox>
              <Fotos>
                <div>
                  {!loading && <img src={pokemon.sprites.front_default} alt='Foto frontal do Pokémon'/>}
                </div>
                <div>
                  {!loading && <img src={pokemon.sprites.back_default} alt='Foto lateral do Pokémon'/>}
                </div>
              </Fotos>
              <BaseStatsBox>
                {!loading && <BaseStats listaStatus={pokemon.stats}/>}
              </BaseStatsBox>
              <ColunaTres>
                <div>
                 {!loading && <p> #{pokemon.id} </p>}
                 {!loading && <h3> {pokemon.name} </h3>}
                 {!loading && <Type listaTypes={pokemon.types}/>}
                </div>
                {!loading && <Moves listaMoves={pokemon.moves}/>}
              </ColunaTres>
            </DetalhesBox>
          </DetalhesPokemon>
        </Container>
      </div>
  );
}
  
  export default Detalhes;