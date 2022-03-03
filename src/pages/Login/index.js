import React from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  // toast.success('suuuucesso');
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleAction.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
/*
// import axios from '../../services/axios';
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;

      console.log(data);
    }

    getData();
  }, []);
  */
