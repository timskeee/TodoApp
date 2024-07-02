import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import {Link} from 'expo-router';
import TodoItem from '../components/TodoList';

interface Todo{
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () =>{
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('')

  const addTodo =() =>{
    if (newTodoText.trim()) {
      setTodos([...todos,{id:Math.random().toString(), text:newTodoText, completed:false,}]);
      setNewTodoText('')
    }
  };

  const handleRemoveTodo = (id:string) => {
    setTodos(todos.filter((todo) => todo.id !==id));
  };


  return(
    
    <View style={[styles.container,{flex:1, padding:10}]}>
      
      <TouchableOpacity>
        <Text>1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text>2</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text>3</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text>4</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Todo List</Text>
      <TextInput style={styles.textInput}
      placeholder="Add a new item..."
      value={newTodoText}
      onChangeText={setNewTodoText}/>
      <TouchableOpacity onPress={addTodo} style = {styles.button}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={({item})=>(<TodoItem key={item.id} todo={item} onRemove={handleRemoveTodo}/>)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    
    // background: rgb(19,0,85),
    // background: linear-gradient(90deg, rgba(19,0,85,1) 0%, rgba(171,0,210,1) 100%),
  },
  title:{
    color:'cyan',
    fontFamily:'Roboto',
    fontSize:50,
  },
  text:{
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: "100", 
  },
  button:{
    color:'red',
    backgroundColor:'grey',
    padding: 30,
    borderRadius:30,
    marginBottom:25,
  },
  textInput:{
    borderWidth:1, 
    padding:15, 
    marginVertical:10,
    borderRadius:25,
    
  },
  todo:{
    borderWidth:1,
  }
});
export default App;