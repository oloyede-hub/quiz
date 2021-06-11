import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CreateQuiz from './containers/CreateQuiz';
import AddQuestion from './containers/AddQuestion';
import AddChoice from './containers/AddChoice';
import { useEffect, useState } from 'react';

function App() {

    const [quiz, setQuiz] = useState({});
    const [questionList, setQUestionList] = useState([]);
    const [choiceList, setChoiceList] = useState([]);
   

  const handleChoiceListUpdate = (newChoice) => {
    setChoiceList(prevChoice => [...prevChoice, newChoice]);
  }

  console.log("ChoiceList: ", choiceList)

  const handletQUestionListUpdate = (newQuestion) => {
    newQuestion = Object.assign(newQuestion, { choiceList: choiceList });
    setQUestionList(prevQuestion => [...prevQuestion, newQuestion]);
  }

  useEffect(() => {
    setQuiz({
      questionList: questionList,
    })
    
  }, [questionList]);

  
  const  handleQuizUpdate = ({ quiz_title, total_point, deadline, time_allowed}) => {
    setQuiz({
      quiz_title,
      total_point,
      deadline,
      time_allowed,
    
    });
  }
  console.log("Quiz: ", quiz)
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => {
          document.title= "CreateQuiz"
          return <CreateQuiz questionList={quiz.questionList} handleQuizUpdate={handleQuizUpdate} {...props} />
        }} />
        <Route exact path="/addquestion" render={(props) => {
          document.title= "AddQuestion"
          return <AddQuestion choiceList={choiceList} handletQUestionListUpdate={handletQUestionListUpdate} {...props} />
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
