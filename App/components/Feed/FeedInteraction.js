import React from 'react';
import {View} from 'react-native';
import defaultStyle from '../../config/defaultStyle';
import IconsFeed from './IconsFeed';

function FeedInteraction({socials: {likes, retweet, love}}) {
  return (
    <View style={defaultStyle.feedInteraction}>
      <IconsFeed name="comment" number={likes} />
      <IconsFeed name="retweet" number={retweet} />
      <IconsFeed name="heart" number={love} />
      <IconsFeed name="share-google" />
    </View>
  );
}

export default FeedInteraction;
