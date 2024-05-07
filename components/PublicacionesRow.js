import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import PublicCard from "./PubliCard"; // Corregimos la importación del componente PublicCard

export default function PublicacionesRow ({ title, description, price}) {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
                    <Text style={{ color: "#A0AEC0", fontSize: 12 }}>{description}</Text>
                    <text style={{ color: "#A0AEC0", fontSize: 12 }}>{price}</text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.Text, fontWeight: "bold" }}>Todas</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}>
                {
                    publicaciones.map((publicacion, index) => (
                        <PublicCard
                            item={publicacion}
                            key={index}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}
