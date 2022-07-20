import { Container, Name, Number,Bar } from './styled';

function Stats(props) {
    return (
        <Container>
            <Name> {props.name} </Name>
            <Number> {props.value} </Number>
            <Bar value={props.value}></Bar>
        </Container>
    );
  }
  
  export default Stats;