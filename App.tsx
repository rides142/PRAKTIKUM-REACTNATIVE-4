import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ListItem {
  id: string;
  name: string;
}

const App = () => {
  const [text, setText] = useState('');
  const [flatListData, setFlatListData] = useState<ListItem[]>([
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
    { id: '4', name: 'Date' },
    { id: '5', name: 'Elderberry' },
  ]);
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0'); // State untuk warna latar belakang

  const handleButtonPress = () => {
    if (text.trim() !== '') {
      const newItem: ListItem = {
        id: String(flatListData.length + 1),
        name: text,
      };
      setFlatListData([...flatListData, newItem]);
      setText('');
    } else {
      Alert.alert('Error', 'MASUKAN TEXT WIR!');
    }
  };

  const renderFlatListItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity style={styles.flatListItem}>
      <Text style={styles.flatListItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const changeBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RIDES GACOR</Text>
      </View>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCV9IQoKVapGBFtYjM8nkpx2_hrhT51FlwA&s',
        }}
      />

      <Text style={styles.sectionTitle}>Masukkan Text :</Text>
      <TextInput
        style={styles.input}
        placeholder="KETIKAN SESUATU..."
        onChangeText={setText}
        value={text}
      />

      <Button
        title="TEKAN IKI "
        onPress={handleButtonPress}
        color="#841584"
      />

      <View style={styles.flatListContainer}>
        <Text style={styles.sectionTitle}>Flat List:</Text>
        <FlatList
          data={flatListData}
          renderItem={renderFlatListItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatList} // Perubahan di sini
        />
      </View>

      <View style={styles.colorPickerContainer}>
        <Text style={styles.sectionTitle}>Ubah Warna Background:</Text>
        <View style={styles.colorPicker}>
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#f0f0f0' }]}
            onPress={() => changeBackgroundColor('#f0f0f0')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#ffcc00' }]}
            onPress={() => changeBackgroundColor('#ffcc00')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#99ccff' }]}
            onPress={() => changeBackgroundColor('#99ccff')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#cc99ff' }]}
            onPress={() => changeBackgroundColor('#cc99ff')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 10,
  },
  flatListItem: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatListItemText: {
    fontSize: 18,
    color: '#333',
  },
  flatList: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  colorPickerContainer: {
    marginTop: 20,
  },
  colorPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
});

export default App;
