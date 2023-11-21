import MainLayout from '../layouts/MainLayout';
import React from 'react';

const AboutScreen = () => {
  return (
    <MainLayout>
    <div>
      <h1>Incredible To Do List</h1>
      <h3>Tyson Harder</h3>
      <p>23/11/20</p>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </div>
    </MainLayout>
  );
};

export default AboutScreen;
