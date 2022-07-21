import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 65%;
    align-items: center;
    padding-bottom: 9px;
    padding-top: 9px;
    border-top: solid 1px #ECECEC;
`

export const Name = styled.p`
    text-align: right;
    color: gray;
    font-weight: 800;
    font-size: 12px;
    margin: 0;
`

export const Number = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: 800;
    margin: 0;
`

export const Bar = styled.div`
    width: ${props => props.value}%;
    height: 13px;
    background-color: ${props => props.effort === 0 ? '#FF7C2D' : '#FFDD6A'};
    border-radius: 3px;
`