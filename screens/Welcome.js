import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
    //   colors={[COLORS.secondary, COLORS.primary]}
    colors={["#ffffff", "#ffffff"]}
    >
      <View style={{ flex: 1 }}>
        <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
        }}>
          <Image
            source={require("../assets/98559b7eeeef3887b200710583b1d927.gif")}
            style={{
              height: 300,
              width: 300,
              borderRadius: 20,
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              textAlign: "center",
              color: COLORS.black,
            }}
          >
            Unidos desperdiciamos
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              textAlign: "center",
              color: COLORS.black,
            }}
          >
            menos
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 15,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              El lugar donde tú y tu negocio ayudan a reducir el desperdicio de
              frutas y verduras en la Ciudad de México
            </Text>
          </View>

          <Button
            title="Registrarse"
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              ¿Ya tengo cuenta ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Iniciar sesion
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
