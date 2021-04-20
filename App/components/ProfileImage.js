import React from 'react';
import {Image} from 'react-native';
import defaultStyle from '../config/defaultStyle';

function ProfileImage() {
  return (
    <Image
      source={{
        uri: 'https://i1.sndcdn.com/artworks-000559377156-n3hr78-t500x500.jpg',
      }}
      resizeMode="contain"
      style={defaultStyle.imageProfile}
    />
  );
}

export default ProfileImage;
