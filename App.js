import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Fred', id: '1' },
    { name: 'Hans', id: '2' },
    { name: 'Jude', id: '3' },
    { name: 'Kila', id: '4' },
    { name: 'Kisife', id: '5' },
    { name: 'Rene', id: '6' },
    { name: 'Ketch', id: '7' },
  ])

  const pressHandler = (id)=>{
    console.log(id);
    setPeople((prevPerson)=>{
      return prevPerson.filter((person => person.id != id))
    })
  }

  return (
    <View style={styles.container}>
      
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item })=>(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        
      )}
    />

      {/* <ScrollView>
        {people.map(person => 
         
            <View key={person.key}>
              <Text style={styles.person}>{person.name}</Text>
            </View>
          
        )}
      </ScrollView> */}

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
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
