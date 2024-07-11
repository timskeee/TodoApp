import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList} from "react-native";

interface Todo{
    id:string;
    text:string;
    completed:boolean;
}

interface TodoProps{
    todo:Todo;
    onRemove? : (id:string) => void;
}

const FullTodo: React.FC = () =>{
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
    
    const moveUp = (index:number) => {
      if (index>0){
      const updatedTasks = [...todos];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTodos(updatedTasks);
    }
    };
  
    const moveDown = (index:number) => {
      if (index<todos.length -1){
        const updatedTasks = [...todos];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTodos(updatedTasks);
      }
    };

    const TodoItem : React.FC<TodoProps> = ({ todo, onRemove}) => {
    const [completed, setCompleted] = useState(todo.completed); //Changes state if completed

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    const handleDelete = () => {
        if (onRemove){
            onRemove(todo.id);
        }
    };





return(
    <View>

    </View>
);
};

const styles = StyleSheet.create({
    
});

export default FullTodo;
