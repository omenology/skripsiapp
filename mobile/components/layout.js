import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  View,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              console.log('click');
              navigation.toggleDrawer();
            }}>
            <Icon name="menu" style={{color: 'white', fontSize: 18}} />
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right />
      </Header>

      <View style={{flex: 1}}>{props.children}</View>
    </Container>
  );
};
