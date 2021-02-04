import React from 'react';

import {Wrapper,Container,Img,Title,Titlea,Titleb,Histories,Historie,Casa,Linha,Linhaq,Preco,Location,Rating} from './styles';

import One from '../../components/Post';

import CasaI from '../../images/casa.png';

export default function Travel() {
  return (
    <Wrapper>
      <Container>

      {/* LANGUAGE = Selecionar > Idioma */}
      {/* PLACE = Selecionar > Destino */}

      <Title>Wellness</Title>
      <Titlea>Aqui estão os seus favoitos</Titlea>
     
      {/* <Histories>
      <Historie></Historie>
      <Historie></Historie>
      <Historie></Historie>
      <Historie></Historie>
      <Historie></Historie>
      <Historie></Historie>
      <Historie></Historie>
      </Histories> */}

      {/* <Banner /> */}

      <Casa>
        <Img source={CasaI} />
      </Casa>

      <Casa>
        <Img source={CasaI} />
      </Casa>

      {/* <Two /> */}
      {/* <Titleb>Casas disponíveis em Trancoso</Titleb>
      <One />
      <Titleb>Restaurantes abertos em Trancoso</Titleb>
      <One /> */}
      </Container>
    </Wrapper>
  );
}