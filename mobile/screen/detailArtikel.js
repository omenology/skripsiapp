import React from 'react';

import {Grid, Row, Col} from 'react-native-easy-grid';
import {Text, View} from 'native-base';

import {Dimensions, Image} from 'react-native';

import useDetailArtikel from '../utils/detailArtikel';

import Layout from '../components/layout';
import LoadingArtikel from '../components/loadingArtikel';

//const {width} = Dimensions.get('window');

export default ({route}) => {
  const {url} = route.params;
  const [data, loading, error] = useDetailArtikel(url);
  console.log(loading, data, '=======================');
  //console.log('render', loading, data?.judul);
  return (
    <Layout title="Detail Artikel">
      {!loading ? (
        <Grid style={{padding: 5}}>
          <Row style={{overflow: 'scroll'}}>
            <Col>
              <Image
                style={{height: 270}}
                source={{
                  uri:
                    'https://i1.wp.com/mojok.co/wp-content/uploads/2018/07/esai-suka-duka-kerja-dalam-dunia-startup-mojok.jpg?resize=759%2C500&ssl=1',
                }}
              />
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {data.judul}
              </Text>
              <Text
                style={{
                  fontFamily: 'RobotoMono-VariableFont_wght',
                  fontWeight: '300',
                  marginVertical: 5,
                }}>
                {data.penulis} x {data.tanggal}
              </Text>
              {data.pargraph.map((val, index) => {
                return (
                  <Text key={index} style={{marginBottom: 5}}>
                    {val}
                  </Text>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Grid>
      ) : (
        <LoadingArtikel />
      )}
    </Layout>
  );
};
