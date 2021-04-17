import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import Header from './components/header';
import Localiza from './pages/Localiza';
import LocalizaMap from './pages/LocalizaMap';
import LocalizaDetails from './pages/LocalizaDetails';
import { DataProvider } from './contexts/DataContext';

export default function Routes() {
    return (
        <DataProvider>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen
                        name="Localiza"
                        component={Localiza}
                    />
                    <Screen
                        name="LocalizaMap"
                        component={LocalizaMap}
                        options={{
                            headerShown: true,
                            header: () => <Header showCancel={false} title="Selecione no mapa" />
                        }}
                    />
                    <Screen
                        name="LocalizaDetails"
                        component={LocalizaDetails}
                        options={{
                            headerShown: true,
                            header: () => <Header title="Detalhes" />
                        }}
                    />
                </Navigator>
            </NavigationContainer>
        </DataProvider>
    )
}