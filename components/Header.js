import { Text, View, StyleSheet, Image } from "react-native";

import Button from "../components/Button";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 3 }}>
          <Button title="Get app" onPress={() => {}}></Button>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.hamburger}
            source={require("../assets/hamburger.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    minHeight: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
  hamburger: {
    width: 25,
    height: 30,
    marginLeft: 10,
  },
  logo: {
    marginLeft: 10,
  },
});

export default Header;
