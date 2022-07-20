import { Header, Container, DetalhesPokemon, DetalhesBox, FotoTitulo, Fotos, BaseStatsBox, ColunaTres } from './styled';
import Voltar from '../../assets/vectors/seta-voltar.png';
import Logo from '../../assets/images/logo.png';
import PokemonTitulo from '../../assets/images/pokemon-titulo.png';
import BaseStats from '../../components/BaseStats/BaseStats';
import Type from '../../components/Type/Type';
import Moves from '../../components/Moves/Moves';

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
                  <img src={PokemonTitulo} alt='Foto frontal do Pokémon'/>
                </div>
                <div>
                  <img src={PokemonTitulo} alt='Foto lateral do Pokémon'/>
                </div>
              </Fotos>
              <BaseStatsBox>
                <BaseStats/>
              </BaseStatsBox>
              <ColunaTres>
                <div>
                  <p> #01 </p>
                  <h3> Bulbasaur </h3>
                  <Type/>
                </div>
                <Moves/>
              </ColunaTres>
            </DetalhesBox>
          </DetalhesPokemon>
        </Container>
      </div>
    );
  }
  
  export default Detalhes;