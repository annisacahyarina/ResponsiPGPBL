import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faPlusCircle, faMap, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Sampah from './android/app/src/Screen/CreateSampah';
import DataSampah from './android/app/src/Screen/ListDataSampah';
import judul from './android/app/src/Screen/HomeScreen';
import { WebView } from 'react-native-webview';

const webmap = require('./android/app/src/main/assets/map.html');

function CreateSampah() {
  return <Sampah />;
}

function Home() {
  return <HomeScreen />;
}

function MapsScreen() {
  return <WebView source={webmap} />;
}

function ListData() {
  return <DataSampah />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={styles.tabNavigator}>
        <Tab.Screen
          name="Laporan"
          component={DataSampah}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faBookmark} color={color} size={22} />
            ),
            title: 'Data',
          }}
        />
        <Tab.Screen
          name="Lapor"
          component={Sampah}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faPlusCircle} color={color} size={22} />
            ),
            title: 'Lapor',
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faMap} color={color} size={22} />
            ),
            title: 'Peta',
          }}
        />
        <Tab.Screen
          name="About"
          component={judul}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faInfoCircle} color={color} size={22} />
            ),
            title: 'Tentang',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    tabBarActiveTintColor: 'black', 
    tabBarInactiveTintColor: '#0047ab', 
    tabBarStyle: {
      position: 'fixed', 
      backgroundColor: '#f5f5f5', 
      borderRadius: 20, 
      height: 60,
      marginHorizontal: 20, 
      marginBottom: 20, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 10 }, 
      shadowOpacity: 0.25, 
      shadowRadius: 5, 
      elevation: 10, 
    },
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: '600', 
    },
    headerStyle: {
      backgroundColor: '#0066cc', 
    },
    headerTintColor: '#fff', 
    headerTitleStyle: {
      fontWeight: 'bold', 
    },
  },
});
