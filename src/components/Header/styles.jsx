import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  padding-left: 15px; 
  padding-right: 15px; 
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-left: 8px;
  flex: 1; 
  text-align: center; 
`;

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonMenuLogout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center; 
`;
