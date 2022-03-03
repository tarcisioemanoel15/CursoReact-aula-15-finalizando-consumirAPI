import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MyRoute from './MyRoute';
/*
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
*/
import Login from '../pages/Login';

//  isClosed para fechar a rota
export default function Routres() {
  return (
    <Routes>
      <Route path="/login/" element={<Login />} />
    </Routes>
    /*
    <MyRoute path="/" element={<Alunos />} />
    <MyRoute path="/aluno/:id/edit" elemet={<Aluno />} />
    <MyRoute path="/aluno/" element={<Aluno />} />
    <MyRoute path="/fotos/:id" element={<Fotos />} />
    <MyRoute path="/register/" element={<Register />} />
    <MyRoute path="*" element={<Page404 />} />
    */
  );
}
