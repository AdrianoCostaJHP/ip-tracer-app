import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import {styles} from './styles';

export default function Label({children}:any){
    const { dark } = useContext(ThemeContext);

    return(
        <Text style={dark?styles.darkItem:styles.item}>
            <Text style={dark?styles.darkText:null}>{children}</Text>
        </Text>
    )
}