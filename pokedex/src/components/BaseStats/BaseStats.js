import Stats from "../Stats/Stats";
import { Titulo, Total, Name, Number } from './styled';

function BaseStats() {
    return (
      <div>
        <Titulo> Base Stats </Titulo>
        <Stats name={'power'} value={55}/>
        <Stats name={'power'} value={39}/>
        <Stats name={'power'} value={10}/>
        <Stats name={'power'} value={100}/>
        <Stats name={'power'} value={40}/>
        <Stats name={'power'} value={52}/>
        <Total>
          <Name> Total </Name>
          <Number><b> 55 </b></Number>
        </Total>
      </div>
    );
  }
  
  export default BaseStats;