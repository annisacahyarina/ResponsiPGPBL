import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRegistry } from 'react-native';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle, faUserGraduate, faUserPen} from "@fortawesome/free-solid-svg-icons";
import Createdata from './Createdata';
import Datamahasiswa from './Listdata';
import Editdata from './Editdata';

function HomeScreen() {
  return (
    <Createdata/>
  );
}

function DataMahasiswaScreen() {
  return (
    <Datamahasiswa/>
  );
}

function Editscreen() {
  return (
    <Editdata/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tambah" component={HomeScreen} options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faPlusCircle} color={color} size={20} />
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
        <Tab.Screen name="Edit" component={Editscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUserPen} color={color} size={20} />
          ),
         }}  
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}