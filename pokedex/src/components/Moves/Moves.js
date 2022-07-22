import { Div, ListaMoves } from './styled';
import Move from '../Move/Move';

function Moves(props) {
    return (
      <div>
        <Div>
            <h3> Moves: </h3>
            <ListaMoves>
              {props.listaMoves.map((move, index) => {
                return(
                  <Move key={index} name={move.move.name}/>
                )
              })}
            </ListaMoves>
        </Div>
      </div>
    );
  }
  
  export default Moves;