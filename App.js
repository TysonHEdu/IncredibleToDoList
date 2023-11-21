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
import ToDoForm from './src/Components/ToDoForm';
import ToDoList from './src/Components/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />   
                <SafeAreaView>
                    <ScrollView>
                        <ToDoList tasks={tasks.map(task => ({name: task, completed: false}))} />
                    </ScrollView>
                    <View>
                        <ToDoForm addTask={addTask} />
                    </View>
                    </SafeAreaView>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const Stack = createStackNavigator();
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