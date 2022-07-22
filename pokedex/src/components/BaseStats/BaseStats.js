import Stats from "../Stats/Stats";
import { Titulo, Total, Name, Number } from './styled';

function BaseStats(props) {

  const listaStats = props.listaStatus.map((stat, index) => {
    return(
      <Stats name={stat.stat.name} value={stat.base_stat} effort={stat.effort} key={index}/>
    )
  })

  const totalStats = () => {
    let totalPower = 0

    props.listaStatus.forEach(stats => {
      totalPower += stats.base_stat
    });
    return totalPower
  }

    return (
      <div>
        <Titulo> Base Stats </Titulo>
        {listaStats}
        <Total>
          <Name> Total </Name>
          <Number><b> {totalStats()} </b></Number>
        </Total>
      </div>
    );
  }
  
  export default BaseStats;