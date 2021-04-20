import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

function IconsFeed({name, number}) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', paddingRight: 25, alignItems: 'center'}}>
      <EvilIcons name={name} color="black" size={30} />
      <Text>{number}</Text>
    </TouchableOpacity>
  );
}

export default IconsFeed;
