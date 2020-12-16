import React from 'react';

import Skeleton from 'react-native-skeleton-placeholder';
import {View} from 'native-base';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default () => {
  return (
    <View style={{padding: 10, overflow: 'hidden'}}>
      <Skeleton>
        <View style={{width: width, height: 200}} />
        <View style={{width: width, height: 50, marginTop: 10}} />
        <View
          style={{width: 80, height: 15, marginTop: 10, marginBottom: 15}}
        />
        <View style={{width: width, height: 15, marginTop: 5}} />
        <View style={{width: width - 50, height: 15, marginTop: 5}} />
        <View style={{width: width - 30, height: 15, marginTop: 5}} />
        <View style={{width: width - 30, height: 15, marginTop: 5}} />
        <View style={{width: width, height: 15, marginTop: 5}} />
        <View style={{width: width, height: 15, marginTop: 5}} />
        <View style={{width: width - 100, height: 15, marginTop: 5}} />
        <View style={{width: width - 100, height: 15, marginTop: 5}} />
        <View style={{width: width - 80, height: 15, marginTop: 5}} />
        <View style={{width: width, height: 30, marginTop: 15}} />
        <View style={{width: width, height: 30, marginTop: 5}} />
        <View style={{width: width, height: 30, marginTop: 5}} />
        <View style={{width: width, height: 15, marginTop: 5}} />
        <View style={{width: width - 50, height: 15, marginTop: 5}} />
        <View style={{width: width - 30, height: 15, marginTop: 5}} />
        <View style={{width: width - 30, height: 15, marginTop: 5}} />
        <View style={{width: width, height: 15, marginTop: 5}} />
        <View style={{width: width, height: 15, marginTop: 5}} />
      </Skeleton>
    </View>
  );
};
