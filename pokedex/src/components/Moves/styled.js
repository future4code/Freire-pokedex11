import styled from "styled-components"

export const Div = styled.div`
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
    @media (max-width: 500px) {
        width: 100%;
    }
`

export const ListaMoves = styled.div`
    height: 350px;
    max-height: 350px;
    overflow-y: scroll;
`