import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScheduleScreen from './screens/schedule';
import HistoryScreen from './screens/history';
import AboutScreen from './screens/about';
import MedicineScreen from './screens/medicine';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import LoginScreen from './screens/login';

const Tab = createBottomTabNavigator();

export default function App() {
  const [ user, setUser ] = useState()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {
          user
          ? (
            <>
              <Tab.Screen name="Schedule">
                {(props) => <ScheduleScreen {...props} user={user} />}
              </Tab.Screen>
              <Tab.Screen name="History" component={HistoryScreen} />
              <Tab.Screen name="Medicine" component={MedicineScreen} />
              <Tab.Screen name="About" component={AboutScreen} />
            </>
          )
          : (
            <Tab.Screen name="Login">
              {(props) => <LoginScreen {...props} setUser={setUser} />}
            </Tab.Screen>
          )
        }
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});