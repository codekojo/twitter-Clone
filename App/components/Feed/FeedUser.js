import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import defaultStyle from '../../config/defaultStyle';
import color from '../../config/color';

function FeedUser({username, userhandle, datecreated, verifiedTrue}) {
  return (
    <View style={defaultStyle.feedUser}>
      <View style={defaultStyle.userInfo}>
        <Text style={defaultStyle.userName}>{username}</Text>
        {verifiedTrue && (
          <View>
            <MaterialIcons name="verified" size={20} color={color.blue} />
          </View>
        )}
        <Text style={defaultStyle.userHandle}>@{userhandle}</Text>
        <Entypo name="dot-single" color="#657786" size={15} />
        <Text style={defaultStyle.userTime}>{datecreated}</Text>
      </View>
      <MaterialCommunityIcons
        name="dots-vertical"
        color={color.darkGray}
        size={24}
      />
    </View>
  );
}

export default FeedUser;
