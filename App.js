/* My To Do List App
*
* @format
*/

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


export default function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <SafeAreaView>
            <ScrollView>
                <ToDoList tasks={tasks.map(task => ({name: task, completed: false}))} />
            </ScrollView>
            <View>
                <ToDoForm addTask={addTask} />
            </View>
        </SafeAreaView>
    );
}

/*
export default function App() {
    return (
        <SafeAreaView>
            <ScrollView>
                <ToDoList />
            </ScrollView>
            <View>
                <ToDoForm />
            </View>
        </SafeAreaView>
    );
}
*/