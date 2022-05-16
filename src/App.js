import { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import { Title } from './components/Title/Title';
import { ContainerInput } from './components/ContainerInput/ContainerInput';
import Main from './components/Main/Main';

import api from './services/api'


export default function App() {

  const [input, setInput] = useState('');

  const [cep, setCep] = useState({});

  async function handleSearch() {
    
    if(input === '') {
      alert("Preencha algum Cep")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    }catch {
      alert("Erro ao buscar!");
      setInput('');
    }
  }

  return (
    <Container>
      <Title>Busca Cep</Title>
      <ContainerInput>
        <input
        type="text"
        placeholder='Digite seu cep...'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={handleSearch}>
          <FiSearch size={25} color="FFF" />
        </button>
      </ContainerInput>

      {Object.keys(cep).length > 0 && (

        <Main cep={cep.cep} rua={cep.logradouro} complemento={cep.complemento} bairro={cep.bairro} localidade={cep.localidade} uf={cep.uf}/>
        
      )}
      
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#121212, #212b46);
`;
