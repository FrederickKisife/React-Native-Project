import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Fred', key: '1' },
    { name: 'Hans', key: '2' },
    { name: 'Jude', key: '3' },
    { name: 'Kila', key: '4' },
    { name: 'Kisife', key: '5' },
    { name: 'Rene', key: '6' },
    { name: 'Ketch', key: '7' },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(person => 
         
            <View key={person.key}>
              <Text style={styles.person}>{person.name}</Text>
            </View>
          
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
