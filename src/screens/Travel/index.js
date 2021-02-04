import React from 'react';

import {Wrapper,Container,Title,Titlea,Titleb,Titlec,Histories,Historie} from './styles';

import Two from '../../components/Top';
import Experiencias from '../../components/Experiencias';
import Pesquisar from '../../components/Pesquisar';

export default function Travel() {
  return (
    <Wrapper>
      <Container>

      {/* LANGUAGE = Selecionar > Idioma */}
      {/* PLACE = Selecionar > Destino */}

      <Title>Wellness</Title>
      <Titlea>Estilo de vida e muito mais.</Titlea>
     
      <Pesquisar/>

      <Titleb>Para sua viagem!</Titleb>
      <Two/>

      <Titlec>Para seu bem estar!</Titlec>
      <Experiencias />

      </Container>
    </Wrapper>
  );
}