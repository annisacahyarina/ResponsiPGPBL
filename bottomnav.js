import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRegistry } from 'react-native';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Mahasiswa from './Mahasiswa';
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import MapScreen from './Map';


const map = 'https://annisacahyarina.github.io/annisacahyarina.github.io/map.html';

function HomeScreen() {
  return (
    <Profil/>
  );
}

function DataMahasiswaScreen() {
  return (
    <Mahasiswa/>
  );
}
function Map() {
  return (
    <MapScreen/>
  );
}

function WebScreen() {
  return (
    <WebView
        source={{ uri: 'https://github.com/annisacahyarina' }}
        style={{ marginTop: 20 }}
      />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen} options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={20} />
          ),
         }} 
         />
        <Tab.Screen name="Mahasiswa" component={DataMahasiswaScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
          ),
         }}  
         />
        <Tab.Screen name="GitHub" component={WebScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGithub} color={color} size={20} />
          ),
         }}  
         />
        <Tab.Screen name="Map" component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon  icon={faGithub} color={color} size={20} />
          ),
         }}  
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}