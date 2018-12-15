import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

import axios from 'axios';

import Env from '../environment';

export default class RecipeDetail extends Component {

  state = {
    title: '',
    ingredients: [],
    image_url: '',
    publisher: ''
  }

  componentDidMount() {
    console.log('component did mount')
    const { navigation } = this.props;
    const keyId = navigation.getParam('keyId', 'NO-ID');

    axios.get('https://www.food2fork.com/api/get', {
      params: {
        key: Env.api_key,
        rId: keyId
      }
    }).then(res => {
      const { title, ingredients, image_url, publisher } = res.data.recipe;
      console.log('set state')
      this.setState({ title, ingredients, image_url, publisher })
    }).catch(e => console.log(e))

  }

  renderIngredient() {
    let result = this.state.ingredients.map((item, index) => <Text style={styles.paragraph} key={index}>{item.text}</Text>);
    console.log(this.state.ingredients)
    console.log(result)
    console.log('------------------------------')
    return result
  }

  render() {
    // console.log(this.renderIngredient())
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.author}>
          <Image
            style={styles.avatar}
          // source={require('../../assets/avatar-1.png')}
          />
          <View style={styles.meta}>
            <Text style={styles.name}>{this.state.publisher}</Text>
            <Text style={styles.timestamp}>1st Jan 2025</Text>
          </View>
        </View>
        <Text style={styles.title}>{this.state.title}</Text>
        <Image style={styles.image}
          source={{ uri: this.state.image_url }}
        />
        <Text style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 28,
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
          Ingredient
        </Text>
        <Text style={styles.paragraph}>
          {this.state.ingredients}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});