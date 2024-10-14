import React, {useContext} from "react";
import { View, Text, Image } from "react-native";
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AuthContext } from "../../contexts/auth";

export function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 90, height: 90 }}
          resizeMethod="contain"
        />
      </View>
      <Text style={{ fontSize: 18, marginTop: 14, textAlign: 'center', color: '#121212' }}>
        Bem-Vindo
      </Text>
      <Text
        style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20, textAlign: 'center', color: '#121212' }}
        numberOfLines={1}
      >
        {user && user.name}
      </Text>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Sair"
        labelStyle={{color: '#F0F4FF'}}
        onPress={signOut}
        style={{ backgroundColor: 'red'}}
      />
    </DrawerContentScrollView>
  );
}
