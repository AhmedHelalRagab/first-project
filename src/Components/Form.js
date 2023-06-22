import Button from "./Button";
import React, { useState, useRef } from "react";
import styles from './Form.module.css'
import Card from "./Card";
import ErrorModal from "./ErrorModal";
const Form = (props) => {
  // const [user, setUser] = useState("");
  // const [age, setAge] = useState("");
  const EnteredName=useRef()
  const EnteredAge=useRef()
  const [error,setError]=useState();
  // const changeUser = (event) => {
  //   setUser(event.target.value);
  // };
  // const changeAge = (event) => {
  //   setAge(event.target.value);
  // };
  const submitForm = (event) => {
    event.preventDefault();
    const user=EnteredName.current.value;
    const age=EnteredAge.current.value;
    const userInfo = {
      Name: user,
      Age: age,
      id: Math.random().toString(),
    };
    if(age.trim().length===0|| user.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid input'
      })
      return ;
    }
    if(+age <1){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age (age >0)'
      });
      return;
    }
    props.onSaveData(userInfo);
    // setAge("");
    // setUser("");
    EnteredName.current.value='';
    EnteredAge.current.value='';
  };
  const handleError=()=>{
    setError(null);
  }
  return (
    <React.Fragment className={styles.allContent}>

    {error &&<ErrorModal onConfirm={handleError} title={error.title} message={error.message}></ErrorModal>}
    <Card>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="user">Username</label>
          <input
            // value={user}
            // onChange={changeUser}
            type="text"
            name=""
            id="use"
            ref={EnteredName}
            />
        </div>
        <div>
          <label htmlFor="age">Age (years)</label>
          <input
            // value={age}
            // onChange={changeAge}
            type="number"
            name=""
            id="age"
            ref={EnteredAge}
          />
        </div>
        <Button className={styles.button} type="submit" >Add user</Button>
      </form>
    </Card>
    </React.Fragment>
  );
};

export default Form;
