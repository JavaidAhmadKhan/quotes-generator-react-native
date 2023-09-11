import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from "react-native";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.quoteText}>{quote}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Pressable onPress={fetchRandomQuote}>
          <Text style={styles.buttonText}>Get Random Quote</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    color: "red",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
  },
  quoteText: {
    fontSize: 18,
    marginBottom: 20,
    margin: 10,
    lineHeight: 30,
    fontWeight: 500,
    color: "white",
  },
});

export default RandomQuote;
