import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
  flex:1;
  background-color: #F0F4FF;
`;

export const ListReceita = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  align-items: baseline;
  margin-top: 8px;
`;

export const Title = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #FFF;
`;