import React from 'react'
import CreateQuizUI from '../../layouts/CreateQuizUI';



const CreatQuiz = ({ handleQuizUpdate, onChange, quiz, choiceList, questionList }) => {
    return (
        <div>
            <CreateQuizUI onChange={onChange} handleQuizUpdate={handleQuizUpdate} choiceList={choiceList} quiz={quiz} questionList={questionList} />
        </div>
    )
}

export default CreatQuiz
