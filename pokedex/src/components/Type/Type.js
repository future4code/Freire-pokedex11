import { Estilo } from './styled';
import Poison from '../../assets/images/poison.png'

function Type(props) {
    return (
        <Estilo>
            <img src={Poison} alt='imagem Poison' />
            <p> Poison </p>
        </Estilo>
    );
  }
  
  export default Type;