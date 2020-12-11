import React, {useEffect, useState}from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

interface mapPosition{
	latitude: number;
	longitude: number;
	city: string;
	country_name: string;
	ip: string;
	region_name: string;
}
    
export default function LocalizaDetails(){
    const navigation =  useNavigation();
    const route = useRoute();
    const params = route.params as mapPosition;
    
    const[latitude, setLatitude] = useState(0);
	const[longitude, setLongitude] = useState(0);
	const[city, setCity] = useState('');
	const[country_name, setCountry_name] = useState('');
	const[ip, setIP] = useState('');
	const[region_name, setRegion_name] = useState('');
	
	useEffect (() => {
		
		setLatitude(params.latitude);
		setLongitude(params.longitude);
		setCity(params.city);
		setCountry_name(params.country_name);
		setIP(params.ip);
		setRegion_name(params.region_name);
	},[
		params.latitude, 
		params.longitude, 
		params.city, 
		params.country_name, 
		params.ip, 
		params.region_name
	]);

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <Text style={styles.label}>Cidade</Text>
            <View style={styles.item}>
                <Text>{city}</Text>
            </View>

            <Text style={styles.label}>Estado</Text>
            <View style={styles.item}>
                <Text>{region_name}</Text>
            </View>

            <Text style={styles.label}>Pais</Text>
            <View style={styles.item}>
                <Text>{country_name}</Text>
            </View>

            <Text style={styles.label}>Latitude</Text>
            <View style={styles.item}>
                <Text>{latitude}</Text>
            </View>

            <Text style={styles.label}>Longitude</Text>
            <View style={styles.item}>
                <Text>{longitude}</Text>
            </View>

            <Text style={styles.label}>Provedor de Internet</Text>
            <View style={styles.item}>
                <Text>{}</Text>
            </View>

            <Text style={styles.label}>IP</Text>
            <View style={styles.item}>
                <Text>{ip}</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      label: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_600SemiBold',
        marginBottom: 8,
      },
      item: {
        backgroundColor: '#fff',
        borderBottomWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
      },
})