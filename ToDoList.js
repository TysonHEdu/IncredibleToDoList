import { Pressable, ScrollView, View, Text, StyleSheet } from "react-native";
import React from 'react';

export default function ToDoList() {
    return (
        <ScrollView>
            <Pressable>
                <View style={[customStyles.task, customStyles.completed]}>
                    <Text style={customStyles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[customStyles.task]}>
                    <Text style={customStyles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[customStyles.task, customStyles.completed]}>
                    <Text style={customStyles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
}

const customStyles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});