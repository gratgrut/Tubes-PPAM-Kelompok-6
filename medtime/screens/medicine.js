import { StyleSheet, Text, View } from 'react-native';

export default function MedicineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Medicine
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});