import {View, Text} from 'native-base';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getArtikelPenulis} from '../store/actions';

import Layout from '../components/layout';
import ListArtikel from '../components/listArtikel';
import {Image} from 'react-native';

export default (props) => {
  const {route} = props;
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  const profile = useSelector((state) => state.artikel.additionalData);
  const artikel = useSelector((state) => state.artikel.data);
  const loading = useSelector((state) => state.artikel.loading);
  const title = useSelector((state) => state.display.title);

  const getArtikel = (page, link) => dispatch(getArtikelPenulis(page, link));

  console.log(profile, '====', loading);

  useEffect(() => {
    console.log(route.params.link);
    getArtikel(page, route.params.link);
  }, [page]);

  const endHandler = () => {
    console.log('end handlert');
  };
  return (
    <Layout title="Artikel by Penulis">
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 150, width: 150, borderRadius: 90}}
          source={{
            uri: profile?.imgUrl,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'NotoSans-Bold',
            marginVertical: 7,
          }}>
          {profile?.nama}
        </Text>
        <View
          style={{
            width: 230,
            height: 1,
            borderBottomWidth: 2,
            borderColor: 'grey',
            marginBottom: 5,
          }}
        />
        <View
          style={{
            width: 180,
            height: 1,
            borderBottomWidth: 2,
            borderColor: 'grey',
            marginBottom: 7,
          }}
        />
      </View>
      <ListArtikel data={artikel} onEndReached={endHandler} loading={loading} />
    </Layout>
  );
};
