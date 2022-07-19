import styled from "styled-components";
import BolaFundo from '../../assets/images/bola-fundo.png';
import PokeBola from '../../assets/images/pokebola-detalhes.png';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 160px;
    padding-left: 80px;
    padding-right: 40px;
    background-color: white;
    div {
        display: flex;
        cursor: pointer;
        img{
            margin-top: 70px;
            width: 7.29px;
            height: 14.58px;
        }
        p {
            margin-top: 60px;
            font-size: 24px;
            line-height: 36px;
            font-weight: 700;
            margin-left: 10.38px;
        }
    }
    img {
        width: 307px;
        height: 113px;
        margin-top: 21px;
        cursor: pointer;
    }
    button {
        width: 226px;
        height: 57px;
        margin-top: 50px;
        border: none;
        border-radius: 8px;
        background-color: #FF6262;
        color: white;
        cursor: pointer;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${BolaFundo});
    background-repeat: no-repeat;
    background-position: right 50% bottom 40%;
    h2 {
        padding: 0;
        margin: 0;
        color: white;
        font-weight: 700;
        font-size: 48px;
        margin-left: 40px;
        padding-top: 60px;
    }
`

export const DetalhesPokemon = styled.div`
    background-color: #729F92;
    height: 663px;
    margin-top: 56px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 37.89px;
    background-image: url(${PokeBola});
    background-repeat: no-repeat;
    background-position: right 50%;
`
export const FotoTitulo = styled.img`
        position: absolute;
        right: 40px;
        top: 150px;
        width: 270px;
        height: 270px;
`

export const DetalhesBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    column-gap: 80px;
`

export const Fotos = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
    margin-left: 44px;
    margin-top: 30px;
    div {
        border-radius: 8px;
    }
`

export const BaseStatsBox = styled.div`
    margin-top: 30px;
    margin-bottom: 5px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
`

export const ColunaTres = styled.div`
    p {
        margin-top: 30px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19.36px;
        color: white;
        margin-bottom: 0;
    }
    h3 {
        color: white;
        font-weight: 700;
        font-size: 48px;
        line-height: 58.09px;
        margin-top: 0;
        margin-bottom: 10px;
    }
`

export const Estilo = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #AD61AE;
    width: 100px;
    border-radius: 8px;
    border: dashed 1px white;
    img {
        padding: 5px 10px;
        width: 20px;
        height: 20px;
    }
    p {
        margin-top: 0px;
        font-size: 14px;
        font-weight: 400;
        padding: 5px 10px;
    }
`

export const Moves = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 292px;
    margin-top: 30px;
    height: 445px;
    h3 {
        color: black;
        font-size: 24px;
        font-weight: 800;
        padding: 18px 0px 0px 18px;
        margin: 0px;
    }
`

export const Move = styled.div`
    background-color: #ECECEC;
    border-radius: 8px;
    border: dashed 1px #000000;
    width: 100px;
    text-align: center;
    padding: 5px;
    margin-left: 18px;
`