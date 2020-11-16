import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import HMMenu from './pages/Hangman/Menu';
import HMChooseNickname from './pages/Hangman/ChooseNickname';
import HMRanking from './pages/Hangman/Ranking';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="TicTacToe" component={TicTacToe} />
        {/* <Screen name="HMMenu" component={HMMenu} />
        <Screen name="HMChooseNickname" component={HMChooseNickname} />
        <Screen name="HMRanking" component={HMRanking} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
