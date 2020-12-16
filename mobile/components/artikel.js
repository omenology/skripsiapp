import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Card, CardItem, Text} from 'native-base';
import {Image, TouchableHighlight} from 'react-native';

export default (props) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('detail', {url: props.data.link})}>
      <Card>
        <CardItem cardBody>
          <Image
            style={{height: 200, flex: 1}}
            source={{
              uri:
                props.data?.gambar ||
                'https://imgs.classicfm.com/images/197180?crop=16_9&width=660&relax=1&signature=BRZNaMvfyoZsC2iJyNn2jRI2yjw=',
            }}
          />
        </CardItem>
        <CardItem
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'NotoSans-Bold'}}>
            {props.data?.judul || 'judul'}
          </Text>
          <Text
            style={{
              fontFamily: 'RobotoMono-VariableFont_wght',
              fontWeight: '300',
            }}>
            {props.data.penulis} x {props.data.tanggal}
          </Text>
          <Text>{props.data.pengantar}</Text>
        </CardItem>
      </Card>
    </TouchableHighlight>
  );
};
