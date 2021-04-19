import React, { useContext } from 'react';
import { View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

interface HeaderProps {
  title: string;
  showCancel ?: boolean;
}

export default function Header({title, showCancel = true}: HeaderProps) {

  const navigation = useNavigation();
  const {dark} = useContext(ThemeContext);

  function goBackToHome(){
    navigation.navigate('Localiza')
  }

  return (
    <View style={dark ? styles.darkContainer : styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color={dark?"#fff":"#15b6d6"}/>
      </BorderlessButton>

      <Text style={dark?styles.darkTitle:styles.title}>
        {title}
      </Text>

      {showCancel ? (
        <BorderlessButton onPress={goBackToHome}>
        <Feather name="x" size={24} color={dark?"#ff0000":"#ff669d"}/>
        </BorderlessButton>
      ): (
        <View />
      )}
    </View>
  )
} 
