import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../pages/Home/Home';
import { CustomDrawer } from './CustomDrawer';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <AppDrawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#FFF',
        paddingTop: 20,
      },
      drawerActiveBackgroundColor: '#3B3DBF',
      drawerActiveTintColor: '#FFF',

      drawerInactiveBackgroundColor: '#F0F2FF',
      drawerInactiveTintColor: '#121212'


    }}

    drawerContent={(props) => <CustomDrawer {...props} />}
   >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        
      />
    </AppDrawer.Navigator>
  );
}