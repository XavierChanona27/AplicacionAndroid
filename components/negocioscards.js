import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function NegociosCards({ item }) {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate('Negocios', { ...item })}
        >
            <View style={{
                borderRadius: 30,
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 7,
                marginRight: 6,
                backgroundColor: '#fff',
                borderRadius: 30,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 7
            }}>
                <Image
                    style={{ height: 150, width: 200, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignSelf: 'center' }}
                    source={item.image}
                />
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ color: '#888', fontSize: 14 }}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12 }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.category}</Text>
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Icon.MapPin color="gray" width={15} height={15} />
                                <Text style={{ color: '#888', marginLeft: 4 }}>Nearby · {item.address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}
