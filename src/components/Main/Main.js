import styled from "styled-components";

export default function Main(props) {
    return(
        <StyledMain>
            <h2>CEP: { props.cep }</h2>
            <span>Logradouro: { props.rua }</span>
            <span>Complemento: { props.complemento }</span>
            <span>Bairro: { props.bairro }</span>
            <span>{props.localidade} - {props.uf}</span>
        </StyledMain>
    )
};

const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    width: 90vw;
    border-radius: 8px;

    h2 {
        margin: .7em 0;
        font-size: 2.4em;
    }

    span {
        margin-bottom: .7em;
        font-weight: bold;
    }
`;