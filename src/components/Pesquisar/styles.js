import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 90%;
  height: 50px;
  background: #333;
  border-radius: 30px;
`;

export const Hello = styled.Text`
  margin-right: 20px;
  color: #fff;
  text-align: center;
`;

