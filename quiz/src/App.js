import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CreateQuiz from './containers/CreateQuiz';
import AddQuestion from './containers/AddQuestion';
import AddChoice from './containers/AddChoice';
import React, { useState } from 'react';
import useForm from "./containers/AddQuestion/useForm"
;

function App() {
  const { setQuestion } = useForm();
 
  const [quiz, setQuiz] = useState({
    quiz_title: "",
    total_point: "",
    deadline: "",
    time_allowed: "",
    questions: [] 
    });
    const [questionList, setQUestionList] = useState([]);
    const [choiceList, setChoiceList] = useState([]);
    
    
    // The quiz object can be stringify here and send to the backend...
    // make sure the Create  button is clicked after the choices has been added
    console.log("quiz: ", JSON.stringify(quiz, null, 2));
    
    console.log("Quiz: ", quiz);
 


  const handleChoiceListUpdate = (newChoice) => {
    setChoiceList(prevChoice => [...prevChoice, newChoice]);
    setQuestion(prev => ({
     ...prev,
      choiceList: [ newChoice]
    }))
  }
 

  const handletQUestionListUpdate = (newQuestion) => {
    setQUestionList(prev => [...prev, newQuestion])
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
     }));
   
  }

  
  const  handleQuizUpdate = (form) => {
    setQuiz((prev) => ({
      ...prev,
      ...form
    }));
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => {
          document.title= "CreateQuiz"
          return <CreateQuiz questionList={questionList} handleQuizUpdate={handleQuizUpdate} {...props} />
        }} />
        <Route exact path="/addquestion" render={(props) => {
          document.title= "AddQuestion"
          return <AddQuestion  setQUestionList={setQUestionList} choiceList={choiceList} handletQUestionListUpdate={handletQUestionListUpdate} {...props} />
        }} />
        <Route exact path="/addchoice" render={(props) => {
          document.title= "AddChoice"
          return<AddChoice handleChoiceListUpdate={handleChoiceListUpdate} {...props} />
        }} />
      </Switch>
    </Router>
  );
}

export default App;