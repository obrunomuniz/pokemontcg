import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';

import SearchIcon from '../components/SearchIcon';

import MenuIcon from '../components/MenuIcon';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Drawer from '../pages/Drawer';

const DefaultHeaderOptions = () => {
  const { colors } = useTheme();

  return {
    headerTitleAlign: 'center',
    headerTintColor: colors.accent,
    headerStyle: {
      shadowColor: colors.primary,
      backgroundColor: colors.primary,
      elevation: 0,
    },
  };
};

const HomeHeaderOptions = (navigation: any) => {
  return {
    title: 'PokeApp',
    headerLeft: () => <MenuIcon navigation={navigation} />,
    headerRight: () => <SearchIcon />,
  };
};

const DetailsHeaderOptions = () => {
  return {
    title: '',
    headerBackTitleVisible: false,
  };
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...DefaultHeaderOptions(),
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            ...HomeHeaderOptions(navigation),
          };
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ ...DetailsHeaderOptions() }}
      />
    </HomeStack.Navigator>
  );
};

const DrawerNavigator = createDrawerNavigator();
export const Routes = () => {
  return (
    <DrawerNavigator.Navigator
      drawerStyle={{
        backgroundColor: '#FFF',
        width: 340,
      }}
      drawerContent={() => <Drawer />}
    >
      <DrawerNavigator.Screen
        name="HomeNavigator"
        component={HomeStackScreen}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Routes;
