import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import ItemSeparator from './App/common/ItemSeparator';
import Feed from './App/screens/Feed';
const DATA = [
  {
    id: 1,
    userName: '2pacx',
    userHandle: '2pac',
    profileURL:
      'https://i1.sndcdn.com/artworks-000559377156-n3hr78-t500x500.jpg',
    tweet: 'Thug Life!!',
    dateCreated: '25m',
    social: {
      likes: 284,
      retweet: 174,
      love: 784,
    },
    tweetImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0UvdagP7j0bZTGEwlc5JAMzBLDqKvfeQWw&usqp=CAU',
    verified: true,
  },
  {
    id: 2,
    userName: 'Nasir Jones',
    userHandle: 'Nas',
    profileURL:
      'https://townsquare.media/site/812/files/2019/06/nas.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    tweet: 'Long Crypto Forever!!!',
    dateCreated: '5s',
    social: {
      likes: 172,
      retweet: 902,
      love: 200,
    },
    verified: true,
  },
  {
    id: 3,
    userName: 'Kojo swic',
    userHandle: 'kojo_____',
    profileURL:
      'https://www.telegraph.co.uk/content/dam/news/2016/12/07/PD896209_AP_rawlings-clintons1_trans_NvBQzQNjv4BqwCEyLVUF1qZ-BAIhhFp7LLOg2fLyTZ98Z6fVkiljZ8U.jpg',
    tweet: 'Life goes on!!!!',
    dateCreated: '5h',
    social: {
      likes: 100,
      retweet: 100,
      love: 100,
    },
    verified: false,
  },
  {
    id: 33,
    userName: 'Don Life',
    userHandle: 'Do0000___',
    profileURL:
      'https://www.blackpast.org/wp-content/uploads/prodimages/files/Kwame_Nkrumah.jpg',
    tweet: 'And So my fellow Ghanaians!!!!',
    dateCreated: '10h',
    social: {
      likes: 10,
      retweet: 100,
      love: 100,
    },
    verified: false,
  },
  {
    id: 4,
    userName: 'J. Cole',
    userHandle: 'coleworld',
    profileURL:
      'https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg',
    tweet: 'Illmatic is a classic g 1994 !!!!',
    dateCreated: '1h',
    social: {
      likes: 200,
      retweet: 100,
      love: 784,
    },
    tweetImage:
      'https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1504493778017-GH1OSV02S5LMZSDZR9C4/ke17ZwdGBToddI8pDm48kD6g6d_8IznzvwGE9lO5DQoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkohZJiDdrI1I8fvN-mvKNK5lz5E2twVKTvGuJDiNEjuG6v6ULRah83RgHXAWD5lbQ/Albumism_Nas_Illmatic.jpg',
    verified: true,
  },
  {
    id: 5,
    userName: 'King James',
    userHandle: 'kingJames',
    profileURL:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc5358798e4c00060d2274%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1184%26cropX2%3D3286%26cropY1%3D30%26cropY2%3D2130',
    tweet: 'Make it happen man!!',
    dateCreated: '50m',
    social: {
      likes: 600,
      retweet: 600,
      love: 784,
    },
    tweetImage:
      'https://img.olympicchannel.com/images/image/private/t_16-9_760/primary/uxdywapzx7pzaaliyrx3',
    verified: true,
  },
  {
    id: 6,
    userName: 'Bob Marley',
    userHandle: 'bob',
    profileURL:
      'https://janataweekly.org/wp-content/uploads/2020/06/Art-25.jpg',
    dateCreated: '25m',
    social: {
      likes: 284,
      retweet: 174,
      love: 784,
    },
    tweetImage: 'https://images.wsj.net/im-150255?width=620&size=1.5',
    verified: true,
  },
  {
    id: 7,
    userName: 'Amakye Dede',
    userHandle: 'iron_boy',
    profileURL:
      'https://a1-images.myspacecdn.com/images03/33/832bfff54553474d90574ca1ab776e57/600x600.jpg',
    tweet: 'Iron boy @ 25',
    dateCreated: '25m',
    social: {
      likes: 50,
      retweet: 40,
      love: 84,
    },
    tweetImage: 'https://i.ytimg.com/vi/bKVyaR9lqmw/maxresdefault.jpg',
    verified: true,
  },
];
function App() {
  function renderFeed({item}) {
    return (
      <Feed
        userName={item.userName}
        userHandle={item.userHandle}
        profileURL={item.profileURL}
        dateCreated={item.dateCreated}
        tweet={item.tweet}
        social={item.social}
        verified={item.verified}
        tweetImage={item.tweetImage}
      />
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderFeed}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
}

export default App;
