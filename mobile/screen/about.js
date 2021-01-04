import React from 'react';

import {Content, Spinner, Text, View} from 'native-base';
import {Image} from 'react-native';

import useFetch from '../utils/fetch';

import Layout from '../components/layout';

export default () => {
  const [data, loading] = useFetch('/info/tentang');

  return (
    <Layout title="Tentang">
      <Content>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'NotoSans-Bold',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingBottom: 5,
              borderBottomWidth: 2,
            }}>
            Tentang Aplikasi
          </Text>
          <Text
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
              textAlign: 'justify',
            }}>
            Aplikiasi ini sebagai hasil dari penelitian skiripsi dengan jdulul{' '}
            <Text style={{fontWeight: 'bold'}}>
              "IMPLEMENTASI TEKNIK WEB SCRAPING PADA WEB MEDIA DIGITAL UNTUK
              MEMBANGUN APLIKASI ANDROID"
            </Text>{' '}
            di STTGarut yang dilakukan oleh ikbal lukmanul hakim, tidak ada
            alasan khusu media online yang menjadi bahan penelitian hanya saja
            mojok.co salah satu media yang sering dibaca oleh pembuat.
          </Text>
          <Text
            style={{
              marginVertical: 5,
              marginHorizontal: 10,
              textAlign: 'justify',
            }}>
            omenology merupakan username atau nickname yang sering dipakai
            pembuat dalam dunia maya.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'NotoSans-Bold',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingBottom: 5,
              borderBottomWidth: 2,
            }}>
            Tentang Mojok
          </Text>
          {!loading ? (
            data?.paragraph.map((val, index) => {
              return (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 10,
                    textAlign: 'justify',
                  }}
                  key={index}>
                  {val}
                </Text>
              );
            })
          ) : (
            <Spinner style={{marginTop: 50}} />
          )}
        </View>
        <View
          style={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>
            o m e n o l o g y{'    '}
            <Text style={{fontWeight: 'bold'}}>x</Text>
            {'    '}
          </Text>
          <Image
            style={{width: 50, height: 50, borderRadius: 50}}
            source={require('../assets/icon.png')}
          />
        </View>
      </Content>
    </Layout>
  );
};
