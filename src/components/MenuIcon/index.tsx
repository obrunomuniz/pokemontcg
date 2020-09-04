import React from 'react';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

export default function MenuIcon({ navigation }) {
  const { colors } = useTheme();

  const handlePress = () => {
    navigation.openDrawer();
  };
}
