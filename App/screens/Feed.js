import React from 'react';
import {View} from 'react-native';
import defaultStyle from '../config/defaultStyle';
import ProfileImage from '../components/ProfileImage';
import FeedUser from '../components/Feed/FeedUser';
import Tweets from '../components/Feed/Tweets';
import TweetImage from '../components/Feed/TweetImage';
import FeedInteraction from '../components/Feed/FeedInteraction';

function Feed({
  userName,
  userHandle,
  profileURL,
  TweetUrlImage,
  dateCreated,
  tweet,
  social,
  tweetImage,
  verified,
}) {
  return (
    <View style={defaultStyle.feedContainer}>
      {/* Left Container */}

      <View style={defaultStyle.leftFeedContainer}>
        <ProfileImage uris={profileURL} />
      </View>

      {/* Right Container */}
      <View style={defaultStyle.RightFeedContainer}>
        <FeedUser
          username={userName}
          userhandle={userHandle}
          datecreated={dateCreated}
          verifiedTrue={verified}
        />
        <Tweets tweets={tweet} />
        {tweetImage && <TweetImage source={tweetImage} />}
        <FeedInteraction socials={social} />
      </View>
    </View>
  );
}

export default Feed;
