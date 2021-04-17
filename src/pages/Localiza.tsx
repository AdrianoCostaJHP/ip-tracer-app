import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logoImage from '../images/icone2.png';
import { Context } from '../contexts/DataContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Localiza() {
    const navigation = useNavigation();
    const [ip, setIp] = useState('');
    const { handleSearch } = useContext(Context)

    async function loadIp() {
        if (ip === '') {
            console.warn("Endereço Invalido");
            return;
        }
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
        <LinearGradient colors={['#ff0a6c', '#2d27ff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
            <Image style={styles.logoImage} source={logoImage} />
            <Text style={styles.label}>Consumindo a API com sucesso !</Text>
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
                <Text style={styles.textButton}>Procurar</Text>
            </TouchableOpacity>

        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 35,
    },

    label: {
        color: '#FFF',
        fontSize: 16
    },
    inputIP: {
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 20,
        fontSize: 16,

        maxHeight: 80,
        maxWidth: 320,
        height: 40,
        width: Dimensions.get('window').width,

        paddingLeft: 24,
        textAlign: 'center',
        elevation: 3,
        margin: 20,
    },
    Button: {
        maxHeight: 80,
        maxWidth: 200,
        width: 130,
        height: 50,
        backgroundColor: "#CB0162",
        padding: 10,

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textButton: {
        color: "#FFF",
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
    }
});
