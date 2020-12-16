import React from 'react';
import {Dimensions} from 'react-native';

import {Content, List, View, Spinner} from 'native-base';
import Skeleton from 'react-native-skeleton-placeholder';

import Artikel from './artikel';

const {width} = Dimensions.get('window');

export default (props) => {
  const {data, loading, onEndReached} = props;

  const skeletonItem = [];
  for (let index = 0; index < 4; index++) {
    skeletonItem.push(
      <View
        key={index}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 10,
            height: 120,
            borderRadius: 4,
            margin: 10,
            marginBottom: 0,
          }}
        />
        <View
          style={{width: width - 10, height: 35, borderRadius: 4, margin: 10}}
        />
      </View>,
    );
  }

  return (data.length == 0) & loading ? (
    <Content>
      <Skeleton>{skeletonItem}</Skeleton>
    </Content>
  ) : (
    <React.Fragment>
      <List
        dataArray={data}
        renderItem={(data) => <Artikel data={data.item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        keyExtractor={(d, index) => index.toString()}
      />
      {loading ? <Spinner /> : null}
    </React.Fragment>
  );
};
