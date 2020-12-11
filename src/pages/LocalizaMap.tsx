import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {useRoute, useNavigation} from '@react-navigation/native';
import api from '../services/api';

import mapIcon from '../images/icone2.png';

interface mapPosition{
	latitude: number;
	longitude: number;
	city: string;
	country_name: string;
	ip: string;
	region_name: string;
}

export default function LocalizaMap() {
	const navigation =  useNavigation();
	const route = useRoute();
	const params = route.params as mapPosition;

	const[latitude, setLatitude] = useState(0);
	const[longitude, setLongitude] = useState(0);
	const[city, setCity] = useState('');
	const[country, setCountry] = useState('');
	const[ip, setIP] = useState('');
	const[region_name, setRegion_name] = useState('');
	
	useEffect (() => {
		setLatitude(params.latitude);
		setLongitude(params.longitude);
		setCity(params.city);
		setCountry(params.country_name);
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

	if(!latitude){
		return(
			<View style={styles.container}>
				<Text>Carregando </Text>
			</View>
		)
	}

	function localizaDetails(latitude: number, longitude : number, city: string, country_name: string, ip: string, region_name: string){
        navigation.navigate('LocalizaDetails', {latitude,longitude, city, country_name, ip, region_name});
    }
	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: 0.008,
					longitudeDelta: 0.008
				}}
			>
				<Marker

					icon={mapIcon}
					calloutAnchor={{
						x: 2.7,
						y: 0.8,
					}}
					coordinate={{
						latitude:latitude,
						longitude: longitude,
						//latitude: latitude == undefined ? 0: latitude,
						//longitude: longitude == undefined ? 0: longitude, 

					}}
				>
					<Callout tooltip={true} onPress={()=>localizaDetails(latitude,longitude, city, country, ip, region_name)}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>Detalhes</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>{city} - {region_name}</Text>

			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},

	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},

	calloutContainer: {
		width: 120,
		height: 60,
		paddingHorizontal: 16,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 16,
		justifyContent: 'center',

	},
	calloutText: {
		fontFamily: 'Nunito_700Bold',
		color: '#0089a5',
		fontSize: 14,
	},
	footer: {
		position: "absolute",
		left: 24,
		right: 24,
		bottom: 32,

		backgroundColor: '#fff',
		borderRadius: 20,
		height: 56,
		paddingLeft: 24,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		elevation: 3,

	},
	footerText: {
		fontFamily: 'Nunito_700Bold',
		color: '#8fa7b3'
	},
});