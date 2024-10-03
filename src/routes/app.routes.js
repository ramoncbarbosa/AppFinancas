import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import { Home } from '../pages/Home/Home';

import { AuthContext } from '../contexts/auth';

const AppDrawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      //nome do user logado
      <View style={{ margin: 20, padding: 10, backgroundColor: '#BBB', borderRadius: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', color: '#000' }}>
          {user.name}
        </Text>
      </View>
      //button de sair
      <TouchableOpacity onPress={()=> signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
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
