import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Item, Input, List, ListItem, View} from 'native-base';
import {ImageBackground, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {axios} from './utils/conection';
import {setTitle} from './store/actions';

import Main from './screen/main';
import DetailArtikel from './screen/detailArtikel';

const Drawer = createDrawerNavigator();

const style = StyleSheet.create({
  active: {
    backgroundColor: '#8fcbff47',
  },
  activeText: {
    color: '#276ae5',
  },
});

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState('terbaru');
  const [menuItem, setMenuItem] = useState([]);
  const [categoryActive, setCategotyActive] = useState(true);

  const setTitleHandler = (title) => dispatch(setTitle(title));

  useEffect(() => {
    axios
      .get('/info/menu-item')
      .then((response) => {
        setMenuItem(response.data.data);
      })
      .catch((err) => {
        console.log(err, 'kkk');
        //setError('somethings error');
      });
  }, []);

  return (
    <Fragment>
      <ImageBackground
        source={require('./assets/bglogin2.png')}
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24}}>M o j o k . C o</Text>
      </ImageBackground>
      <Item
        style={{
          marginVertical: 10,
          marginLeft: 10,
          marginRight: 10,
          paddingHorizontal: 10,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderRadius: 5,
        }}>
        <Input
          onEndEditing={() => {
            setTitleHandler('Hasil Pencarian');
          }}
          placeholder="Cari Artikel...."
        />
        <Icon name="magnify" style={{fontSize: 16}} />
      </Item>

      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Terbaru"
          focused={focused == 'terbaru'}
          icon={() => <Icon name="newspaper" />}
          onPress={() => {
            setFocused('terbaru');
            setTitleHandler('Terbaru');
            props.navigation.navigate('terbaru');
          }}
        />

        <DrawerItem
          label="Category"
          icon={() => <Icon name="folder-multiple-outline" />}
          onPress={() => {
            setCategotyActive(!categoryActive);
          }}
        />

        <List>
          <View style={{height: categoryActive ? 310 : 0, overflow: 'hidden'}}>
            {menuItem.map((val, index) => {
              return (
                <ListItem
                  key={index}
                  style={[
                    {
                      paddingLeft: 10,
                      marginRight: 10,
                      marginLeft: 30,
                      marginVertical: 2,
                      borderRadius: 5,
                    },
                    focused == val.judul ? style.active : null,
                  ]}
                  onPress={() => {
                    setTitleHandler(val.judul);
                    setFocused(val.judul);
                  }}>
                  <Text>{val.judul}</Text>
                </ListItem>
              );
            })}
          </View>
        </List>

        <DrawerItem
          label="Disclaimer"
          focused={focused == 'disclaimer'}
          icon={() => <Icon name="alert-outline" />}
          onPress={() => {
            setFocused('disclaimer');
            props.navigation.navigate('disclaimer');
          }}
        />

        <DrawerItem
          label="About"
          focused={focused == 'about'}
          icon={() => <Icon name="information-outline" />}
          onPress={() => {
            setFocused('about');
            props.navigation.navigate('about');
          }}
        />
      </DrawerContentScrollView>

      <Text
        style={{
          display: 'flex',
          bottom: 0,
          textAlign: 'center',
          color: '#cfcfcf',
          padding: 5,
        }}>
        Powerd by : omenology
      </Text>
    </Fragment>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="terbaru"
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="terbaru" component={Main} />
        <Drawer.Screen name="detail" component={DetailArtikel} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
