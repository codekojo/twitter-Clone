import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IndexFeed from '../components/Feed/IndexFeed';

const FeedStack = createStackNavigator();

function FeedNavigation() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={IndexFeed}
        options={{
          headerLeft: () => {},
        }}
      />
    </FeedStack.Navigator>
  );
}

export default FeedNavigation;
