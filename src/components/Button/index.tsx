import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  children: string;
  onPressFunction: () => void;
}

export function Button({ children, onPressFunction }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressFunction}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
