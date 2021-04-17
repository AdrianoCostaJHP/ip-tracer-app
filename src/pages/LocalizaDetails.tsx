import React, {useContext, useEffect, useState}from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Context } from '../contexts/DataContext';

    
export default function LocalizaDetails(){
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
				<Text>...Loading</Text>
			</View>
		)
	}

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
            <Text style={styles.label}>Cidade</Text>
            <View style={styles.item}>
                <Text>{data.city}</Text>
            </View>

            <Text style={styles.label}>Estado</Text>
            <View style={styles.item}>
                <Text>{data.region_name}</Text>
            </View>

            <Text style={styles.label}>Pais</Text>
            <View style={styles.item}>
                <Text>{data.country_name}</Text>
            </View>

            <Text style={styles.label}>Latitude</Text>
            <View style={styles.item}>
                <Text>{data.latitude}</Text>
            </View>

            <Text style={styles.label}>Longitude</Text>
            <View style={styles.item}>
                <Text>{data.longitude}</Text>
            </View>

            <Text style={styles.label}>Provedor de Internet</Text>
            <View style={styles.item}>
                <Text>{}</Text>
            </View>

            <Text style={styles.label}>IP</Text>
            <View style={styles.item}>
                <Text>{data.ip}</Text>
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