import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Komponen mount sekali');
    return () => console.log('Cleanup saat unmount');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/120' }} style={styles.avatar} />
      <Text style={styles.title}>Halo React Native! 👋</Text>
      <Text>Hitung: {count}</Text>
      <View style={{ height: 12 }} />
      <Button title="Tambah" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginVertical: 8 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
});
