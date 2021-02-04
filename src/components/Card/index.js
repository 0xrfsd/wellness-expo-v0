import React from 'react'
import {Wrapper,Option,CardImage,CardTitle,CardRate,CardOPrice,CardNPrice,CardTPrice} from './styles'

import CardImageI from '../../images/oi.jpg'

import img8 from '../../images/oi.jpg';
import img9 from '../../images/01.jpg';
import img10 from '../../images/10.png';


const card = [
    {
      key: String(Math.random()),
      img: img8,
      title: 'Casa',
      rate: '5',
      oprice: '232',
      npricenprice: '2323',
      tprice: '23232',
    },
    {
        key: String(Math.random()),
        img: img8,
        title: 'Casa',
        rate: '5',
        oprice: '232',
        npricenprice: '2323',
        tprice: '23232',
    },
    {
        key: String(Math.random()),
        img: img8,
        title: 'Casa',
        rate: '5',
        oprice: '232',
        npricenprice: '2323',
        tprice: '23232',
    },
  ]

export default function CardI() {
    return(
        <Wrapper>
      {card.map((card) => (
        <Option key={card.key} bgColor={card.bgColor}>
          <CardImage source={card.img} />
          <CardTitle>{card.title}</CardTitle>
          <CardRate>{card.rate}</CardRate>
          <CardOPrice>{card.oprice}</CardOPrice>
          <CardNPrice>{card.npricenprice}</CardNPrice>
          <CardTPrice>{card.tprice}</CardTPrice>
        </Option>
      ))}
    </Wrapper>
    );
}



