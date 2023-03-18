import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';



export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: '1'},
    {text: 'Create An App', key: '2'},
    {text: 'Play On The Switch', key: '3'},
  ])

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
    
      <View style={styles.content}>
        <AddTodo/>
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) =>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
  },
  list:{
    marginTop:20,
  }

});
