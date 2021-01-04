import React from 'react';

import {Text, View, Content} from 'native-base';

import {Image, TouchableHighlight} from 'react-native';

import useDetailArtikel from '../utils/detailArtikel';

import Layout from '../components/layout';
import LoadingArtikel from '../components/loadingArtikel';

//const {width} = Dimensions.get('window');

export default ({route, navigation}) => {
  const {url} = route.params;
  const [data, loading, error] = useDetailArtikel(url);

  return (
    <Layout title="Detail Artikel">
      {!loading ? (
        <Content scrollEnabled style={{padding: 10, flex: 1}}>
          <View>
            <Image
              style={{height: 270}}
              source={{
                uri:
                  data.gambar ||
                  'https://i1.wp.com/mojok.co/wp-content/uploads/2018/07/esai-suka-duka-kerja-dalam-dunia-startup-mojok.jpg?resize=759%2C500&ssl=1',
              }}
            />
            <Text
              style={{fontWeight: 'bold', fontSize: 20, marginVertical: 10}}>
              {data.judul}
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate('penulis', {link: data.penulisLink})
                }>
                <Text
                  style={{
                    fontFamily: 'RobotoMono-VariableFont_wght',
                    fontWeight: 'bold',
                    color: 'darkgrey',
                  }}>
                  {data.penulis}
                </Text>
              </TouchableHighlight>
              <Text
                style={{
                  fontFamily: 'RobotoMono-VariableFont_wght',
                  fontWeight: 'bold',
                  color: 'darkgrey',
                  marginBottom: 10,
                }}>
                {' '}
                x {data.tanggal}
              </Text>
            </View>
            {data.pargraph.map((val, index) => {
              return (
                <Text key={index} style={{marginBottom: 7}}>
                  {val}
                </Text>
              );
            })}
          </View>
        </Content>
      ) : (
        <LoadingArtikel />
      )}
    </Layout>
  );
};
