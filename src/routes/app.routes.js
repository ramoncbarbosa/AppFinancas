import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../pages/Home/Home';
import { CustomDrawerContent } from '../components/CustomDrawerContent';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <AppDrawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
    </AppDrawer.Navigator>
  );
}
