import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import NegociosCards from "./negocioscards";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
          <Text style={{ color: "#A0AEC0", fontSize: 12 }}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.Text, fontWeight: "bold" }}>
            Todas
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        vertival
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}
      >
        {restaurants.map((restaurant, index) => {
          return <NegociosCards item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
