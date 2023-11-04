import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm() {
<View style={styles.form}>
    <TextInput
        style={styles.input}
        placeholder="Add a new task..."
    />
    <Button title="Add" />
</View>
}
