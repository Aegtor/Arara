import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Flask API'ye arama isteği gönderiyoruz
    const response = await fetch(`http://127.0.0.1:5000/search?q=${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search..."
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default App;
