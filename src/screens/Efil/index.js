import React from 'react';

import { Wrapper, Container, Notifications, Section, Notification, Img, Title, H3, Titlea, Low, Lista, Titleb, Histories, Historie, Casa, Linha, Linhaq, Preco, Location, Rating } from './styles';

import CasaI from '../../images/casa.png';

export default function Travel() {
  return (
    <Wrapper>
      <Container>

        {/* LANGUAGE = Selecionar > Idioma */}
        {/* PLACE = Selecionar > Destino */}

        <Title>Boa Noite icado,</Title>
        <Titlea>Aqui estão suas notificacões</Titlea>



      <Notifications>
      <Notification></Notification>
      <Notification></Notification>
      <Notification></Notification>
      </Notifications>

      <Linha>
      <H3>Configua efil</H3>
      <Low></Low>
      <H3>Configua efencias</H3>
      <Low></Low>
      <H3>eguntas Fequentes</H3>
      <Low></Low>
      <H3>Tone-se um Anfiitiao</H3>
      <Low></Low>
      <H3>Seguanca e ivacidade</H3>
      <Low></Low>
      </Linha>

    <Section></Section>

      </Container>
    </Wrapper>
  );
}