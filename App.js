import { SafeAreaView, StyleSheet } from "react-native";
import RandomQuote from "./RandomQuote";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RandomQuote />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    backgroundColor: "#047fc7",
  },
});

export default App;
