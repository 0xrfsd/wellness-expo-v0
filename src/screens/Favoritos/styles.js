import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Casa = styled.View`
  margin-top: 20px;
`;

export const Linha = styled.View`
flex-direction: row;
padding-left: 1.5%;
padding-right: 5%;
`;

export const Linhaq = styled.View`
flex-direction: column;
padding-left: 1.5%;
padding-right: 5%;
`;

export const Preco = styled.Text`
  margin-left: 15px;
  margin-top: 10px;
  color: #333;
  font-size: 26px;
`;

export const Location = styled.Text`
  margin-left: 15px;
  color: #333;
  opacity: .8;
  font-size: 22px;
`;

export const Rating = styled.Text`
  margin-left: auto;
  margin-top: 10px;
  color: #333;
  font-size: 26px;
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
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #333;
  font-weight: bold;
  font-size: 30px;
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
  width: 90%;
  align-self: center;
`;

