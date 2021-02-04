import React from 'react';

import {Wrapper,Container,Pesquisar,Img,Title,Titlea,Titleb,Histories,Historie,Casa,Linha,Preco,Location,Rating} from './styles';

import {Text} from 'react-native'

import Post from '../../components/Post';

import CasaI from '../../images/casa.png';

export default function Travel() {
  return (
    <Wrapper>
      <Container>

      {/* LANGUAGE = Selecionar > Idioma */}
      {/* PLACE = Selecionar > Destino */}

      <Title>Wellness</Title>
      <Titlea>Muito mais que exeiências.</Titlea>
{/*      
      <Recommends />

      <Titleb>   estauantes em Trancoso</Titleb>

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

      {/* <Titleb>Acomodações que amamos!</Titleb>

      <Casa>
        <Img source={CasaI} />
        <Linha>
        <Preco>R$230</Preco>
        <Rating>4.98</Rating>
        </Linha>
        <Linha>
        <Location>Trancoso, Brazil</Location>
        </Linha>
      </Casa>

      <Casa>
        <Img source={CasaI} />
        <Linha>
        <Preco>R$230</Preco>
        <Rating>4.98</Rating>
        </Linha>
        <Linha>
        <Location>Trancoso, Brazil</Location>
        </Linha>
      </Casa>

      <Casa>
        <Img source={CasaI} />
        <Linha>
        <Preco>R$230</Preco>
        <Rating>4.98</Rating>
        </Linha>
        <Linha>
        <Location>Trancoso, Brazil</Location>
        </Linha>
      </Casa>

      <Casa>
        <Img source={CasaI} />
        <Linha>
        <Preco>R$230</Preco>
        <Rating>4.98</Rating>
        </Linha>
        <Linha>
        <Location>Trancoso, Brazil</Location>
        </Linha>
      </Casa>

      <Titleb>Acomodações mais procuradas em Trancoso</Titleb>

      <LastChance /> */}

      <Pesquisar>
        <Text>Quando você vai viajar?</Text>
      </Pesquisar>

      <Post/>

      {/* <Two /> */}
      {/* <Titleb>Casas disponíveis em Trancoso</Titleb>
      <One />
      <Titleb>Restaurantes abertos em Trancoso</Titleb>
      <One /> */}
      </Container>
    </Wrapper>
  );
}
