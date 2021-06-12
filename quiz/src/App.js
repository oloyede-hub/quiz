import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CreateQuiz from './containers/CreateQuiz';
import AddQuestion from './containers/AddQuestion';
import AddChoice from './containers/AddChoice';
import { useState } from 'react';

function App() {

    const [quiz, setQuiz] = useState({});
    const [questionList, setQUestionList] = useState([]);
    const [choiceList, setChoiceList] = useState([]);
   

  // The quiz object can be stringify here and send to the backend...
  // make sure the Create Quiz button is clicked before it can populate the quiz object
console.log("quiz: ",JSON.stringify(quiz, null, 2) )
  const handleChoiceListUpdate = (newChoice) => {
    setChoiceList(prevChoice => [...prevChoice, newChoice]);
  }




  const handletQUestionListUpdate = (newQuestion) => {
    const newQuestionData = Object.assign(newQuestion, { choiceList :choiceList});
    setQUestionList(prevQuestion => [...prevQuestion, newQuestionData]);
  }


  
  const  handleQuizUpdate = ({ quiz_title, total_point, deadline, time_allowed}) => {
    setQuiz({
      quiz_title,
      total_point,
      deadline,
      time_allowed,
      questionList: questionList,
    });
  }


  console.log("Quiz: ", quiz)
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => {
          document.title= "CreateQuiz"
          return <CreateQuiz questionList={questionList} handleQuizUpdate={handleQuizUpdate} {...props} />
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