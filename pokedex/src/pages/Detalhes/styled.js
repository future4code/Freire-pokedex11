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
    @media (max-width: 500px) {
        padding-left: 10px;
        padding-right: 5px;
        align-items: center;
        height: 100px;
    }
    div {
        display: flex;
        cursor: pointer;
        img{
            margin-top: 70px;
            width: 7.29px;
            height: 14.58px;
            @media (max-width: 500px) {
                height: 14px;
                width: auto;
                margin-right: 15px;
                margin-left: 30px;
                margin-top: 0px;
            }
        }
        p {
            margin-top: 60px;
            font-size: 24px;
            line-height: 36px;
            font-weight: 700;
            margin-left: 10.38px;
            @media (max-width: 500px) {
                display: none;
            }
        }
    }
    img {
        width: 307px;
        height: 113px;
        margin-top: 21px;
        cursor: pointer;
        @media (max-width: 500px) {
            width: auto;
            height: 50px;
            margin-top: 0;
        }
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
        transition: all 0.5s ease-in-out;
        &:hover {
            background-color: #fac80a;
        }
        @media (max-width: 500px) {
            width: 100px;
            height: 50px;
            margin-top: 0;
        }
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
    min-height: 600px;
    margin-top: 56px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 37.89px;
    background-image: url(${PokeBola});
    background-repeat: no-repeat;
    background-position: right 50%;
    padding-bottom: 30px;
    @media (max-width: 500px) {
        height: auto;
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
        padding: 15px;
    }
`
export const FotoTitulo = styled.img`
        position: absolute;
        right: 40px;
        top: 150px;
        width: 270px;
        height: 270px;
        @media (max-width: 500px) {
            height: 100px;
            width: auto;
            top: 200px;
        }
`

export const DetalhesBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    column-gap: 80px;
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 20px;
    }
`

export const Fotos = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
    margin-left: 44px;
    margin-top: 30px;
    width: 100%;
    div {
        display: flex;
        border-radius: 8px;
        background-color: white;
        width: 100%;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100px;
        }
    }
    @media (max-width: 500px) {
        margin-left: 0;
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