import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

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
  margin-left: 20px;
  margin-bottom: 20px;
  color: #333;
  opacity: .9;
  font-size: 20px;
  text-align: left;
`;


export const Titleb = styled.Text`
  margin-bottom: 10px;
  margin-left: 20px;
  color: #333;
  opacity: .9;
  font-size: 20px;
  text-align: left;
`;


export const Titlec = styled.Text`
  margin-left: 20px;
  margin-top: 10px;
  color: #333;
  opacity: .9;
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

