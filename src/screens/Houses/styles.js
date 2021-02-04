import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Casa = styled.View`
  margin-top: 20px;
  padding-right: 20px;
`;

export const Linha = styled.View`
flex-direction: row;
`;

export const Preco = styled.Text`
  margin-top: 10px;
  color: #333;
  font-size: 20px;
`;

export const Location = styled.Text`
  color: #333;
  opacity: .8;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Rating = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  color: #333;
  font-size: 20px;
`;

export const Title = styled.Text`
  width: 45%;
  margin-top: 30px;
  margin-left: 20px;
  color: #333;
  font-weight: bold;
  font-size: 26px;
  text-align: left;
`;

export const Titlea = styled.Text`
  margin-bottom: 20px;
  margin-left: 20px;
  color: #333;
  opacity: .9;
  font-size: 20px;
  text-align: left;
`;

export const Titleb = styled.Text`
  font-weight: bold;
  margin-left: 12px;
  margin-top: 30px;
  color: #000;
  font-size: 20px;
  text-align: left;
`;

export const Histories = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 20,
  },
}))`
`;

export const Historie = styled.View`
  border: 1px solid #cdcdcd;
  margin-right: 20px;
  background-color: #fff;
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 20px;
`;

export const Img = styled.Image`
  border-radius: 10px;
  height: 233px;
  width: 300px;
  align-self: center;
`;

