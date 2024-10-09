import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #F0F3FF;
  border-radius: 4px;
  margin: 0px 10px 14px 10px;
  padding: 12px;

`;

export const Type = styled.View`
  flex-direction: row;
`;

export const TypeTex = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.type === 'despesa' ? '#C62C36' : '#049301'};
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const ValueText = styled.Text`
  color: #121212;
  font-size: 22px;
`;