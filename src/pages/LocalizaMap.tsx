import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import darkTheme from '../../assets/darkThemeMap.json';

import mapIcon from '../images/icone2.png';
import { Context } from '../contexts/DataContext';


export default function LocalizaMap() {
	const navigation =  useNavigation();
	const {data} = useContext(Context); 

	const[loading, setLoading] = useState(true);

	
	useEffect (() => {
		if(data){
			setLoading(false);
		}
	},[]);

	if(loading){
		return(
			<View style={styles.container}>
				<Text>...Loading </Text>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				customMapStyle={darkTheme}
				initialRegion={{
					latitude: data.latitude,
					longitude: data.longitude,
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
						latitude:data.latitude,
						longitude: data.longitude,
						//latitude: latitude == undefined ? 0: latitude,
						//longitude: longitude == undefined ? 0: longitude, 

					}}
				>
					<Callout tooltip={true} onPress={()=>{navigation.navigate('LocalizaDetails')}}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>Detalhes</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>{data.city} - {data.region_name}</Text>

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