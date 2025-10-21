import { FlatList, Text, View, StyleSheet } from 'react-native';

type ItemData = {
  id: string;
  name: string;
};

type RowProps = {
  item: ItemData;
};

const data = [
  { id: '1', name: 'Andi' },
  { id: '2', name: 'Budi' },
  { id: '3', name: 'Citra' },
  { id: '4', name: 'Dewi' },
];

function Row({ item }: RowProps) {
  return (
    <View style={st.row}>
      <Text>{item.name}</Text>
    </View>
  );
}

export default function ListDemo() {
  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => <Row item={item} />}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const st = StyleSheet.create({
  row: { backgroundColor: '#FFF8E1', padding: 12, borderRadius: 8 }
});
