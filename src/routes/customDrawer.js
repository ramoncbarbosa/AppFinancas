import React, { useContext } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../contexts/auth';

export function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {/* Renderiza o nome do usuário no topo do drawer */}
        <View style={{ padding: 6, margin: 20, backgroundColor: '#BBB', borderRadius: 4, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313' }}>{user.name}</Text>
        </View>

        {/* Botão de logout */}
        <TouchableOpacity
          onPress={() => signOut()}
          style={{ padding: 6, margin: 20, backgroundColor: '#f00', borderRadius: 4, alignItems: 'center' }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'semibold', color: '#FFF' }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
