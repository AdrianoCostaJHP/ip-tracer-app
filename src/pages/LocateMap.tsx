import React, { useState, useEffect, useContext } from 'react';
import {Text, View} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import darkTheme from '../../assets/darkThemeMap.json';
import { Context } from '../contexts/DataContext';
import {styles} from '../Styles/LocateMap';
import mapIcon from '../images/icone2.png';
import { ThemeContext } from '../contexts/ThemeContext';


export default function LocateMap() {
	const navigation =  useNavigation();
	const {data} = useContext(Context); 
	const { dark } = useContext(ThemeContext);
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
				
				customMapStyle={dark?darkTheme:[]}
				initialRegion={{
					latitude: data.latitude,
					longitude: data.longitude,
					latitudeDelta: 0.02, // 0.009
					longitudeDelta: 0.02 // 0.009
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
						longitude:data.longitude
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
