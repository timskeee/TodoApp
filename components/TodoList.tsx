import react, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

interface Todo{
    id:string;
    text:string;
    completed:boolean;
}

interface TodoProps{
    todo:Todo;
    onRemove? : (id:string) => void;
}

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
        <View style={[styles.taskcontainer,{flexDirection: 'row', justifyContent:'space-between',alignItems:'center', padding: 10} ]}>
            <Text style={{fontSize:15,flexDirection:'row',flex:1,textDecorationLine: completed ? 'line-through' : 'none'}}>{todo.text}</Text>
            
            <View >
            <View style={{flexDirection:'row', marginRight: 10 }}>
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={toggleCompleted}>
                <Text style={{borderWidth:1, borderRadius:5, padding:2, margin: 5, justifyContent:'center',
                    textDecorationLine: completed ? 'line-through' : 'none'}}>
                    Cross Off
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.deletebutton} onPress={handleDelete}>
                <Text style={{color:'#ba1657'}}>Delete</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deletebutton:{
        borderWidth:1,
        padding:6,
        borderRadius:10,
        borderColor:'#ba1657',
        justifyContent:'center',
    },
    taskcontainer:{
        borderWidth:3,
        borderRadius:25,
        padding:4,
        margin:4,
        borderColor:'#ab00d2',
        
    },

});

export default TodoItem;