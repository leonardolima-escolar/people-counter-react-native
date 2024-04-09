import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "../../components/Button";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <View style={styles.counterView}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <Button onPressFunction={() => setCount(count + 1)}>+</Button>
      <Button onPressFunction={() => {
        if (count >= 1) {
          setCount(count - 1);
        }
      }}>-</Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
