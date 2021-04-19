import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import Header from './components/Header/index';
import Locate from './pages/Locate';
import LocalizaMap from './pages/LocateMap';
import LocalizaDetails from './pages/LocateDetails';
import { DataProvider } from './contexts/DataContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function Routes() {
    return (
        <DataProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen
                            name="Localiza"
                            component={Locate}
                        />
                        <Screen
                            name="LocalizaMap"
                            component={LocalizaMap}
                            options={{
                                headerShown: true,
                                header: () => <Header showCancel={false} title="Toque para detalhes" />
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
            </ThemeProvider>
        </DataProvider>
    )
}