import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Item, Input, List, ListItem, View} from 'native-base';
import {Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {axios} from './utils/conection';
import {
  setTitle,
  getArtikelTerbaru,
  getArtikelKategori,
  getArtikelCari,
} from './store/actions';

import Main from './screen/main';
import ArtikelPenulis from './screen/artikelPenulis';
import DetailArtikel from './screen/detailArtikel';
import Disclaimer from './screen/disclaimer';
import About from './screen/about';

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
  const [categoryActive, setCategotyActive] = useState(false);

  const setTitleHandler = (title) => dispatch(setTitle(title));
  const getArtikelKategoriHandler = (page, url, judul) =>
    dispatch(getArtikelKategori(page, url, judul));
  const getArtikelTerbaruHandler = (page) => dispatch(getArtikelTerbaru(page));
  const getArtikelCariHandler = (page, keyword) =>
    dispatch(getArtikelCari(page, keyword));

  useEffect(() => {
    axios
      .get('/info/menu-item')
      .then((response) => {
        setMenuItem(response.data.data);
        setCategotyActive(true);
      })
      .catch((err) => {
        console.log(err, 'kkk');
      });
  }, []);

  return (
    <Fragment>
      <View
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#122942',
        }}>
        <Image
          source={require('./assets/icon.png')}
          style={{width: 100, height: 100}}
        />
      </View>
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
          onEndEditing={(e) => {
            setTitleHandler('Hasil Pencarian');
            let keyword = e.nativeEvent.text || '';
            props.setGetArtikel(() => (page) =>
              getArtikelCariHandler(page, keyword),
            );
            props.navigation.closeDrawer();
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
            props.navigation.closeDrawer();
            props.setGetArtikel(() => (page) => getArtikelTerbaruHandler(page));
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
                    setFocused(val.judul);
                    props.navigation.navigate('terbaru');
                    props.navigation.closeDrawer();
                    props.setGetArtikel(() => (page) =>
                      getArtikelKategoriHandler(page, val.link, val.judul),
                    );
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
            props.navigation.closeDrawer();
          }}
        />

        <DrawerItem
          label="About"
          focused={focused == 'about'}
          icon={() => <Icon name="information-outline" />}
          onPress={() => {
            setFocused('about');
            props.navigation.navigate('about');
            props.navigation.closeDrawer();
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
  const dispatch = useDispatch();
  const getArtikelTerbaruHandler = (page) => dispatch(getArtikelTerbaru(page));
  const [getArtikel, setGetArtikel] = useState(() => (page) =>
    getArtikelTerbaruHandler(page),
  );

  let MainScreen = (props) => <Main getArtikel={getArtikel} />;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="terbaru"
        drawerContent={(props) => (
          <CustomDrawerContent setGetArtikel={setGetArtikel} {...props} />
        )}>
        <Drawer.Screen name="terbaru" component={MainScreen} />
        <Drawer.Screen name="penulis" component={ArtikelPenulis} />
        <Drawer.Screen name="detail" component={DetailArtikel} />
        <Drawer.Screen name="disclaimer" component={Disclaimer} />
        <Drawer.Screen name="about" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
