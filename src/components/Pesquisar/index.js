import React from 'react'
import {Wrapper,Container,Hello} from './styles'

import { FontAwesome } from '@expo/vector-icons';

import Datepicker from '../DatePicker'

class Pesquisar extends React.Component {
  render() {
    return(
        <Wrapper>
            <Container>
              <Hello>Selecione a data que vai viajar</Hello>
              <FontAwesome name="calendar" size={24} color="white" />
            </Container>
        </Wrapper>
    );
  }
}

export default Pesquisar