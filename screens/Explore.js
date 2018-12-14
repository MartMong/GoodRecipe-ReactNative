import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Category';
import Home from './components/Home';

const { height, width } = Dimensions.get('window');

class Explore extends Component {

  componentWillMount() {
    if (Platform.OS == 'ios') {
      this.startHeaderHeight = 60
    } else {
      this.startHeaderHeight = 80 + StatusBar.currentHeight
    }
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
              marginTop: 20
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 30 : null,
              }}>
              <Icon
                name="ios-search"
                size={20}
                style={{ marginRight: 10 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: '700',
                  backgroundColor: 'white',
                  marginHorizontal: 10
                }}
              />
            </View>
          </View>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 20
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20
                }}>
                What we can help you find Great Meal?
                </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri='https://www.w3schools.com/w3css/img_lights.jpg'
                    name='Home'
                  />
                  <Category
                    imageUri='https://www.w3schools.com/w3css/img_lights.jpg'
                    name='Home1'
                  />
                  <Category
                    imageUri='https://www.w3schools.com/w3css/img_lights.jpg'
                    name='Home2'
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Introducing Airbnb Plus
                    </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of homes verified for quality and comfort
                </Text>
                <View style={{width:width-40,height:200,marginTop:20}}>
                  <Image
                    source={{ uri:'https://www.w3schools.com/w3css/img_lights.jpg' }}
                    style={{flex:1,height:null,width:null,resizeMode:'cover',borderWidth:1,borderRadius:5,borderColor:'#dddddd'}}
                  />
                </View>
                <View style={{marginTop:40}}>
                  <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                    Home around the world
                  </Text>
                  <View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    <Home width={width}/>
                    <Home width={width}/>
                    <Home width={width}/>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})