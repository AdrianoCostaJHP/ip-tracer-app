import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Context } from '../contexts/DataContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Label from '../components/Label/index';
import Item from '../components/Item/index';
import { styles } from '../Styles/LocateDetails';


export default function LocateDetails() {
    const { data } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const { dark } = useContext(ThemeContext);

    useEffect(() => {
        if (data) {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <View>
                <Text>..Loading</Text>
            </View>
        )
    }


    return (
        <ScrollView style={dark ? styles.darkContainer : styles.container} contentContainerStyle={{ padding: 24 }}>
            <Label>Cidade</Label>
            <Item>{data.city}</Item>

            <Label>Estado</Label>
            <Item>{data.region_name}</Item>

            <Label>Pais</Label>
            <Item>{data.country_name}</Item>

            <Label>Latitude</Label>
            <Item>{data.latitude}</Item>

            <Label>Longitude</Label>
            <Item>{data.longitude}</Item>

            <Label>Provedor de Internet</Label>
            <Item>{ }</Item>

            <Label>IP</Label>
            <Item>{data.ip}</Item>
        </ScrollView>
    )
}
