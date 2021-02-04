import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Card = styled.View`
  background: #fff;
  margin: 0 auto;
`;

export const CardImage = styled.Image`
  height: 200px;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
`;

export const CardTitle = styled.Text`
  margin-top: 5px;
  color: #333;
`;

export const CardRate = styled.Text`
  text-align: right;
  color: #cdcdcd;
`;

export const CardOPrice = styled.Text`
  color: #343434;
`;

export const CardNPrice = styled.Text`
  color: #555;
`;

export const CardTPrice = styled.Text`
  color: #222;
`;

export const Option = styled.TouchableOpacity`
  padding-left: 5% !important;
  padding-right: 5% !important;
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 16px;
`;