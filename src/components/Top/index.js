import React from 'react';

import { Container, Option, Title, TitleA, Img } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Acomodações',
    amount: '',
    bgColor: '#cdcd',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Restaurantes',
    amount: '',
    bgColor: '#cdcd',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Experiências',
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