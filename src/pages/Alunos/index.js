import React from 'react';

import { useState } from 'react/cjs/react.production.min';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.response.data);
    }
    getData();
  }, []);
  /**/
  return (
    <Container>
      <h1>Alunos</h1>

      {alunos.map((aluno) => aluno.nome)}
    </Container>
  );
}
