import React from 'react';

import {
  Content,
  Text,
  View,
  Spinner,
  List,
  ListItem,
  Left,
  Body,
} from 'native-base';

import useFetch from '../utils/fetch';

import Layout from '../components/layout';

export default () => {
  const [data, loading] = useFetch('/info/disclaimer');
  return (
    <Layout title="Disclaimer">
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'NotoSans-Bold',
          marginVertical: 5,
          marginHorizontal: 10,
          paddingBottom: 5,
          borderBottomWidth: 2,
        }}>
        Disclaimer Aplikasi
      </Text>
      <List>
        <ListItem style={{paddingVertical: 0}} noBorder>
          <Text style={{alignSelf: 'flex-start'}}>1</Text>
          <Body>
            <Text>Aplikasi tidak untuk keperluan komersil</Text>
          </Body>
        </ListItem>
      </List>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'NotoSans-Bold',
          marginVertical: 5,
          marginHorizontal: 10,
          paddingBottom: 5,
          borderBottomWidth: 2,
        }}>
        Disclaimer Mojok
      </Text>
      <List>
        {!loading ? (
          data?.paragraph.map((val, index) => {
            return (
              <ListItem style={{paddingVertical: 0}} noBorder key={index}>
                <Text style={{alignSelf: 'flex-start'}}>{index + 1}</Text>
                <Body>
                  <Text>{val}</Text>
                </Body>
              </ListItem>
            );
          })
        ) : (
          <Spinner style={{marginTop: 50}} />
        )}
      </List>
    </Layout>
  );
};
