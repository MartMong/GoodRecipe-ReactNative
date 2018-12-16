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
  Dimensions,

} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Category';
import Home from './components/Home';

import Env from '../environment';

const { height, width } = Dimensions.get('window');

class Explore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }


  componentWillMount() {
    if (Platform.OS == 'ios') {
      this.startHeaderHeight = 60
    } else {
      this.startHeaderHeight = 80 + StatusBar.currentHeight
    }
  }

  render() {
    console.log(this.props.navigation)
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
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '34889'
                    })}
                    keyId='34889'
                    imageUri='http://static.food2fork.com/4515542dbb.jpg'
                    name='Zesty Slow Cooker Chicken Barbeque'
                  />
                  <Category
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '2803'
                    })}
                    keyId='2803'
                    imageUri='http://static.food2fork.com/124030cedd.jpg'
                    name='Banana Crumb Muffins'
                  />
                  <Category
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '29159'
                    })}
                    keyId='29159'
                    imageUri='http://static.food2fork.com/19321150c4.jpg'
                    name='Slow Cooker Chicken Tortilla Soup'
                  />
                  <Category
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '3620'
                    })}
                    keyId='3620'
                    imageUri='http://static.food2fork.com/720553ee26.jpg'
                    name='Best Brownies'
                  />
                  <Category
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '35760'
                    })}
                    keyId='35760'
                    imageUri='http://static.food2fork.com/banana_bread300x2000a14c8c5.jpeg'
                    name='Easy Shepherd'
                  />
                  <Category
                    onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '41766'
                    })}
                    keyId='41766'
                    imageUri='http://static.food2fork.com/4307514771_c089bbd71017f42.jpg'
                    name='Restaurant Style Salsa'
                  />

                </ScrollView>
              </View>
              <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Introducing GoodRecipe
                    </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  Find new Recipe with your new eats
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={{ uri: 'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg' }}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderWidth: 1, borderRadius: 5, borderColor: '#dddddd' }}
                  />
                </View>
                <View style={{ marginTop: 40 }}>
                  <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    Recommended for You
                  </Text>
                  <View style={{ paddingHorizontal: 5,marginHorizontal:4, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Home
                       onPress={() => this.props.navigation.navigate('RecipeDetails', {
                        keyId: '35382'
                      })}
                      keyId='35382'
                      imageUri='http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg'
                      name='Jalapeno Popper Grilled Cheese Sandwich'
                      head='Recommend'
                      publisher='Closet Cooking'
                      width={width}
                    />
                    <Home
                     onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '47024'
                    })}
                      keyId='47024'
                      imageUri='http://static.food2fork.com/icedcoffee5766.jpg'
                      name='Perfect Iced Coffee'
                      head='Hot'
                      publisher='The Pioneer Woman'
                      width={width}
                    />
                    <Home
                     onPress={() => this.props.navigation.navigate('RecipeDetails', {
                      keyId: '47319'
                    })}
                      keyId='47319'
                      imageUri='http://static.food2fork.com/CrashHotPotatoes5736.jpg'
                      name='Crash Hot Potatoes'
                      head='Hot'
                      publisher='The Pioneer Woman'
                      width={width}
                    />

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

// createCategory() {
//   axios.get(Env.apiUrl, {
//     params: {
//       key: Env.api_key,
//       page: '1'
//     }
//   }).then(res => {
//     // console.log(11111111,res.data.recipes)
//     // this.setState({data:res.data})

//     if (res.data != undefined) {
//       console.log(res.data)
//       let Categorys = res.data.recipes.map((item, key) => {
//         console.log(3333333)
//         return (<Category key={item.recipe_id} imageUri={item.image_url} name={item.title} />)
//       })
//       console.log(Categorys)
//       console.log(
//         <Category
//           imageUri='http://static.food2fork.com/4515542dbb.jpg'
//           name='Zesty Slow Cooker Chicken Barbeque'
//         />)
//       return (<ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//       >
//         {/* {Categorys} */}
//         <Category
//           imageUri='http://static.food2fork.com/4515542dbb.jpg'
//           name='Zesty Slow Cooker Chicken Barbeque'
//         />
//         <Category
//           imageUri='https://www.w3schools.com/w3css/img_lights.jpg'
//           name='Home1'
//         />
//         <Category
//           onPress={() => this.props.navigation.navigate('RecipeDetails')}
//           imageUri='https://www.w3schools.com/w3css/img_lights.jpg'
//           name='Home2'
//         />
//       </ScrollView>)
//     }
//   })
// }


export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})