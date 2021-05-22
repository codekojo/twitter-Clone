import React from 'react';
import {View} from 'react-native';
import defaultStyle from '../../config/defaultStyle';
import IconsFeed from './IconsFeed';

function FeedInteraction({socials: {likes, retweet, love}}) {
  return (
    <View style={defaultStyle.feedInteraction}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <IconsFeed name="comment" number={likes} />
        <IconsFeed name="retweet" number={retweet} />
        <IconsFeed name="heart" number={love} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <IconsFeed name="share-google" />
      </View>
    </View>
  );
}

export default FeedInteraction;
