import React from 'react';

import {Wrapper,Container,Img,Title,Titlea,Titleb,Histories,Historie,Casa,Linha,Preco,Location,Rating} from './styles';

import One from '../../components/HouseList';
import Banner from '../../components/Banner';
import Recommends from '../../components/Recommends';
import Experiences from '../../components/Experiencias';
import LastChance from '../../components/LastChance';

import CasaI from '../../images/casa.png';

export default function Travel() {
  return (
    <Wrapper>
      <Container>

      {/* LANGUAGE = Selecionar > Idioma */}
      {/* PLACE = Selecionar > Destino */}

      <Title>Wellness</Title>
      <Titlea>Fique em hospedagens incríveis.</Titlea>
     
      <Recommends />

      <Titleb>Acomodações disponíveis em Trancoso</Titleb>

      <Experiences />

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

      <Titleb>Acomodações que amamos!</Titleb>

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

      <LastChance />

      {/* <Two /> */}
      {/* <Titleb>Casas disponíveis em Trancoso</Titleb>
      <One />
      <Titleb>Restaurantes abertos em Trancoso</Titleb>
      <One /> */}
      </Container>
    </Wrapper>
  );
}