import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { Context } from '../contexts/DataContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Styles/Locate';
import logoImage from '../images/icone2.png';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Locate() {
    const navigation = useNavigation();
    const { handleSearch } = useContext(Context);
    const { dark, AlterTheme } = useContext(ThemeContext);
    
    const [ip, setIp] = useState('');

    async function loadIp() {
        if (!ip) {
            console.warn("Endereço Invalido");
            return;
        }
        //const response = await axios.get(`http://api.ipstack.com/%2066.249.64.176?access_key=2a21239b2c1a2ff62cbd11051c74544b`);
        const response = await axios.get(`http://api.ipstack.com/%20${ip}?access_key=2a21239b2c1a2ff62cbd11051c74544b`);
        try {
            if (!response.data) {
                console.warn("Unknown address ⚠️");
                return;
            }

            handleSearch(response.data);
            navigation.navigate('LocalizaMap');
        } catch (err) {
            console.warn("search failure ⚠️⚠️");
        }

    }

    return (
        <LinearGradient colors={dark?['#ff0a6c', '#2d27ff']: [ '#1cefff','#c0c0aa']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
            <Image style={styles.logoImage} source={logoImage} />
            <Text style={styles.label}> Não esqueça dos pontos !!</Text>
            <TextInput
                style={styles.inputIP}
                placeholder="Insira um numero IP"
                placeholderTextColor='#363636'
                keyboardType={"number-pad"}
                maxLength={15}
                autoCapitalize='none'
                autoCorrect={false}
                value={ip}
                onChangeText={setIp}
            />
            <TouchableOpacity style={styles.Button} onPress={loadIp}>
                <Text style={styles.textButton}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.themeButton} onPress={()=>{
                AlterTheme(!dark);
                
            }}> 
            {dark?(
                <MaterialCommunityIcons name="moon-waxing-crescent" size={30} color="white" />
            ):(
                <MaterialIcons name="wb-sunny" size={30} color="white" />
            )}
                
            </TouchableOpacity>
        </LinearGradient>
    );
}

