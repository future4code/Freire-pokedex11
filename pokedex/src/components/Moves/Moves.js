import { Div } from './styled';
import Move from '../Move/Move';

function Moves(props) {
    return (
      <div>
        <Div>
            <h3> Moves: </h3>
              {props.listaMoves.map((move) => {
                return(
                  <Move name={move.move.name}/>
                )
              })}
        </Div>
      </div>
    );
  }
  
  export default Moves;