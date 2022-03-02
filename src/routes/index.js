import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

//  isClosed para fechar a rota
export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/" element={<Alunos />} isClosed={false} />
      <MyRoute path="/aluno/:id/edit" elemet={<Aluno />} isClosed />
      <MyRoute path="/aluno/" element={<Aluno />} isClosed />
      <MyRoute path="/fotos/:id" element={<Fotos />} isClosed />
      <MyRoute path="/login/" element={<Login />} isClosed={false} />
      <MyRoute path="/register/" element={<Register />} isClosed={false} />
      <MyRoute path="*" element={<Page404 />} />
    </Switch>
  );
}
