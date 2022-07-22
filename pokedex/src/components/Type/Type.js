import { ContainerTypes, Img } from './styled';

function Type(props) {
    return (
        <ContainerTypes>
            {props.listaTypes.map((type) => {
                return <Img src={require(`../../assets/images/types/${type.type.name}.png`)} alt={`imagem ${type.type.name}`} />
            })}
        </ContainerTypes>
    );
  }
  
  export default Type;