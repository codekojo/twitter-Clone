import React from 'react';
import {View, Text} from 'react-native';
import defaultStyle from '../config/defaultStyle';
import ProfileImage from '../components/ProfileImage';
import FeedUser from '../components/Feed/FeedUser';
import Tweets from '../components/Feed/Tweets';
import TweetImage from '../components/Feed/TweetImage';

function Feed({TweetUrlImage}) {
  return (
    <View style={defaultStyle.feedContainer}>
      {/* Left Container */}

      <View>
        <ProfileImage />
      </View>

      {/* Right Container */}
      <View style={{flex: 1}}>
        <FeedUser />
        <Tweets />
        {TweetUrlImage && <TweetImage />}
      </View>
    </View>
  );
}

export default Feed;
