import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import defaultStyle from '../../config/defaultStyle';

function FeedUser() {
  return (
    <View style={defaultStyle.feedUser}>
      <View style={defaultStyle.userInfo}>
        <Text>2pac</Text>
        <Text>@2pac</Text>
        <Entypo name="dot-single" color="black" size={15} />
        <Text>25m</Text>
      </View>
      <MaterialCommunityIcons name="dots-vertical" color="red" size={24} />
    </View>
  );
}

export default FeedUser;
