import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useFonts, Jost_400Regular, Jost_700Bold } from "@expo-google-fonts/jost";

const products = [
  { id: "1", nome: "Puma Suede", preco: 449, image: require("./assets/puma.png")},
  { id: "2", nome: "Adidas Rivalry", preco: 599, image: require("./assets/adidas.png")},
  { id: "3", nome: "Nike Blazer", preco: 550, image: require("./assets/nike.png")},
  { id: "4", nome: "Reebok Club C", preco: 479, image: require("./assets/reebok.png")}
];

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#F5F5F5" },
  scrollContainer: { alignItems: "center", paddingBottom: 20 },
  card: {
    width: 220,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: { width: 180, height: 180, resizeMode: "contain", marginBottom: 10 },
  infoContainer: { alignItems: "center" },
  nome: { fontSize: 20, fontFamily: "Jost_700Bold", marginBottom: 5, textAlign: "center" },
  preco: { fontSize: 16, fontFamily: "Jost_700Bold", color: "black" },
});
