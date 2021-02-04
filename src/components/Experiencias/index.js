import React from 'react';

import { Container, Option, Title, TitleA, Img } from './styles';

import img8 from '../../images/oi.jpg';
import img9 from '../../images/01.jpg';
import img10 from '../../images/10.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Lugares para conhecer',
    amount: '',
    bgColor: '#cdcd',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Passeios turísticos incríveis',
    amount: '',
    bgColor: '#cdcd',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Eventos imperdíveis',
    amount: '',
    bgColor: '#cdcd',
  }
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Img source={item.img} />
          <Title>{item.title}</Title>
          <TitleA>{item.amount}</TitleA>
        </Option>
      ))}
    </Container>
  );
}