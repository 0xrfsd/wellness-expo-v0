import React from 'react'
import { Wrapper, Container, Images, Img, Data, Bedrooms, Info, Type, Description, Price, OPrice, NPrice, TPrice } from './styles'
import {Text} from 'react-native'

import Imageone from '../../images/01.jpg'

class Post extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                        {/* <Images>
                            <Img source={Imageone}/>
                        </Images>
                        <Data>
                            <Bedrooms></Bedrooms>
                            <Info></Info>
                        </Data>
                        <Info>
                            <Type></Type>
                            <Description></Description>
                        </Info>
                        <Price>
                            <OPrice></OPrice>
                            <NPrice></NPrice>
                            <TPrice></TPrice>
                        </Price> */}
                </Container>
            </Wrapper>
        );
    }
}

export default Post