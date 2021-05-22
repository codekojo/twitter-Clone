import React from 'react';

import {TouchableOpacity} from 'react-native';

function TabBarButton({children, press}) {
  const TabStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={press} style={TabStyle}>
      {children}
    </TouchableOpacity>
  );
}

export default TabBarButton;
