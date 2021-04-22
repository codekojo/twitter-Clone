import React, {useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import color from '../config/color';
import IndexFeed from '../components/Feed/IndexFeed';
import TabBarButton from '../components/TabBarButton';
import Worki from '../components/Worki';
import FeedNavigation from './FeedNavigation';

const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  const [showHomeActive, setHomeActive] = useState(true);
  const [showSearchActive, setSearchActive] = useState(false);
  const [showNotifActive, setNotifActive] = useState(false);
  const [showMailActive, setMailActive] = useState(false);

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        style: {
          backgroundColor: 'white',
        },
      }}>
      <BottomTab.Screen
        name="Feed"
        component={FeedNavigation}
        options={({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarButton: () => {
            function handleHome() {
              setHomeActive(true);
              setSearchActive(false);
              setNotifActive(false);
              setMailActive(false);
              navigation.navigate('Feed');
            }
            return (
              <TabBarButton press={handleHome}>
                {showHomeActive ? (
                  <Ionicons name="home-sharp" color={color.blue} size={30} />
                ) : (
                  <Ionicons
                    name="md-home-outline"
                    color={color.lightGray}
                    size={30}
                  />
                )}
              </TabBarButton>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={Worki}
        options={({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarButton: () => {
            function handleSearch() {
              setHomeActive(false);
              setSearchActive(true);
              setNotifActive(false);
              setMailActive(false);

              navigation.navigate('Search');
            }
            return (
              <TabBarButton press={handleSearch}>
                {showSearchActive ? (
                  <Ionicons
                    name="md-search-sharp"
                    color={color.blue}
                    size={30}
                  />
                ) : (
                  <Ionicons
                    name="search-outline"
                    color={color.lightGray}
                    size={30}
                  />
                )}
              </TabBarButton>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Notification"
        component={IndexFeed}
        options={({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarButton: () => {
            function handleNotifs() {
              setHomeActive(false);
              setSearchActive(false);
              setNotifActive(true);
              setMailActive(false);

              navigation.navigate('Search');
            }
            return (
              <TabBarButton press={handleNotifs}>
                {showNotifActive ? (
                  <Ionicons
                    name="md-notifications"
                    color={color.blue}
                    size={30}
                  />
                ) : (
                  <Ionicons
                    name="notifications-outline"
                    color={color.lightGray}
                    size={30}
                  />
                )}
              </TabBarButton>
            );
          },
        })}
      />
      <BottomTab.Screen
        name="Mail"
        component={IndexFeed}
        options={({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarButton: () => {
            function handleMail() {
              setHomeActive(false);
              setSearchActive(false);
              setNotifActive(false);
              setMailActive(true);

              navigation.navigate('Search');
            }
            return (
              <TabBarButton press={handleMail}>
                {showMailActive ? (
                  <Entypo name="mail" color={color.blue} size={35} />
                ) : (
                  <AntDesign name="mail" color={color.lightGray} size={30} />
                )}
              </TabBarButton>
            );
          },
        })}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNav;
