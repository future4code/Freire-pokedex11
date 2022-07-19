import { Header, Container, DetalhesPokemon, DetalhesBox, FotoTitulo, Fotos, BaseStatsBox, ColunaTres, Estilo, Moves, Move } from './styled';
import Voltar from '../../assets/vectors/seta-voltar.png';
import Logo from '../../assets/images/logo.png';
import PokemonTitulo from '../../assets/images/pokemon-titulo.png';
import FotoUm from '../../assets/images/rectangle5.png';
import FotoDois from '../../assets/images/rectangle6.png';
import BaseStats from '../../assets/images/basestats.png';
import Poison from '../../assets/images/poison.png';

function Detalhes() {
    return (
      <div>
        <Header>
          <div>
            <img src={Voltar} alt='seta voltar'/>
            <p><u> Todos os Pokémons </u></p>
          </div>
          <img src={Logo} alt='Logo Pokemón' />
          <button> Excluir da Pokédex </button>
        </Header>
        <Container>
          <h2> Detalhes </h2>
          <DetalhesPokemon>
            <FotoTitulo src={PokemonTitulo} alt='Imagem do Pokemon'/>
            <DetalhesBox>
              <Fotos>
                <div>
                  <img src={FotoUm} alt='Foto frontal do Pokémon'/>
                </div>
                <div>
                  <img src={FotoDois} alt='Foto lateral do Pokémon'/>
                </div>
              </Fotos>
              <BaseStatsBox>
                <img src={BaseStats} alt='Base Stats do Pokémon'/>
              </BaseStatsBox>
              <ColunaTres>
                <div>
                  <p> #01 </p>
                  <h3> Bulbasaur </h3>
                  <Estilo>
                    <img src={Poison} alt='imagem Poison' />
                    <p> Poison </p>
                  </Estilo>
                </div>
                <Moves>
                  <h3> Moves: </h3>
                  <Move> Razor Wind </Move>
                </Moves>
              </ColunaTres>
            </DetalhesBox>
          </DetalhesPokemon>
        </Container>
      </div>
    );
  }
  
  export default Detalhes;