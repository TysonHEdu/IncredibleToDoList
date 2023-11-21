import MainLayout from '../layouts/MainLayout';
import React from 'react';
import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';

function HomeScreen() {
  return (
    <MainLayout>
      <div>
        <h1>Incredible ToDo List</h1>
        <ToDoList />
        <ToDoForm />
        <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
      </div>
    </MainLayout>
  );
}

export default HomeScreen;
