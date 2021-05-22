import React from 'react';

import {Text} from 'react-native';
import defaultStyle from '../../config/defaultStyle';

function Tweets({tweets}) {
  return (
    <Text style={defaultStyle.tweets} numberOfLines={7}>
      {tweets}
    </Text>
  );
}

export default Tweets;
