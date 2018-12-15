import { createStackNavigator } from 'react-navigation';
import RecipeDetail from '../screens/RecipeDetail';
import Explore from '../screens/Explore';

export default createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      header: null,
    }
  },
  RecipeDetails: {
    screen: RecipeDetail
  },

}, {
    initialRouteName: 'Explore'
  },
)