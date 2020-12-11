import React, {useState}from 'react';
import { StyleSheet, View , Text, TextInput, TouchableOpacity, Image, Dimensions,  KeyboardAvoidingView, Platform } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../services/api';
import logoImage from '../images/icone2.png';

export default function Localiza() {
    const navigation =  useNavigation();
    const [ip, setIp] = useState('');

    async function loadIp(){
        if(ip === ''){
            console.log("Endereço Invalido");
            return;
        }
       const response = await api.get(`http://api.ipstack.com/%20${ip}?access_key=2a21239b2c1a2ff62cbd11051c74544b`);
        try{
            const{latitude, longitude, city, country_name, ip, region_name} = response.data;
            
            if(typeof latitude === "undefined"){
                console.log("Endereço Inesxistente");
                return;
            }

            handleNavigationToLocalizaMap(latitude, longitude, city, country_name, ip, region_name);
        }catch(err){
            console.log("Erro na requisição");
        }
    }

    function handleNavigationToLocalizaMap(latitude: number, longitude : number, city: string, country_name: string, ip: string, region_name: string){
        navigation.navigate('LocalizaMap', {latitude,longitude, city, country_name, ip, region_name});
    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior='padding' style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.logoImage} source={logoImage}/>
                <Text>Consumindo a API com sucesso !</Text>
                <TextInput
                    style={styles.inputIP}
                    placeholder="Insira o numero IP"
                    placeholderTextColor='#363636'
                    keyboardType={"number-pad"}
                    maxLength={15}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={ip}
                    onChangeText={setIp}
                />
                <TouchableOpacity style={styles.Button} onPress={loadIp}>
                    <Text style={styles.textButton}>Rastrear</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff666',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    inputIP: {
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 20,
        fontSize: 16,
        
		maxHeight: 80,
        maxWidth: 320,
        height:40,
        width: Dimensions.get('window').width,

		paddingLeft: 24,
        textAlign: 'center',
        elevation: 3,
        margin: 20,
    },
    

    logoImage:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 35,
    },
    Button: {
        maxHeight: 80,
        maxWidth: 200,
        width: 130,
        height:50,
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
  