import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 20,
  },
}))`
`;

export const Option = styled.TouchableOpacity`
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const TitleA = styled.Text`
  color: #cdcd;
  font-size: 36px;
  font-weight: bold;
`;

export const Img = styled.Image`
  border-radius: 10px;
  height: 150px;
  width: 200px;
  align-self: center;
`;
