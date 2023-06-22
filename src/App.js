import styles from './App.module.css'
import React, { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card'
import UsersList from './Components/UsersList';

const App = () => {
  const [newData,setNewData]=useState([])
  const takeDataFromForm=(data)=>{
    console.log(data);
    setNewData((prevData)=>{
      return [data,...prevData]
    })
  }

  return (
    <React.Fragment>
      <Form onSaveData={takeDataFromForm}></Form>
      <UsersList users={newData}></UsersList>
    </React.Fragment>
  );
}

export default App;
