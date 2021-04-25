import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IndexFeed from '../components/Feed/IndexFeed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';
import Timeline from '../components/Timeline';

const FeedStack = createStackNavigator();

function FeedNavigation() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Feed"
        component={IndexFeed}
        options={{
          headerLeftContainerStyle: {
            paddingHorizontal: 10,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 10,
          },
          headerStyle: {
            height: 98,
          },

          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="menu"
                color={color.blue}
                size={35}
              />
            );
          },
          headerRight: () => {
            return <Timeline />;
          },
          headerTitle: () => {
            return (
              <MaterialCommunityIcons
                name="twitter"
                color={color.blue}
                size={35}
              />
            );
          },
        }}
      />
    </FeedStack.Navigator>
  );
}

export default FeedNavigation;
