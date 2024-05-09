import { ScrollView, View, Text, TextInput } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured, publicactions } from "../constants";
import FeaturedRow from "../components/featuredRow";
import PublicacionesRow from "../components/PublicacionesRow";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 50,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Icon.Settings
            width={25}
            height={25}
            stroke="#ccc"
            style={{ marginRight: 10 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 12,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#ccc",
              flex: 1,
            }}
          >
            <Icon.Search width={25} height={25} stroke="#ccc" />
            <TextInput
              placeholder="Negocios"
              style={{ marginLeft: 8, flex: 1 }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon.MapPin height={20} width={20} stroke="gray" />
              <Text style={{ color: "gray", marginLeft: 5 }}>
                Ciudad de Mexico
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor[1],
            padding: 12,
            borderRadius: 999,
          }}
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        {/* Publicaciones */}
        <View style={{ marginTop: 20 }}>
          <PublicacionesRow
            title={publicactions.title}
            description={publicactions.description}
            publicaciones={publicactions.publicaciones}
          />
        </View>

        {/* Featured */}
        <View style={{ marginTop: 20 }}>
          <FeaturedRow
            title={featured.title}
            description={featured.description}
            restaurants={featured.restaurants}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
