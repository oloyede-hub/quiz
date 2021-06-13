import React from 'react';
import AddQuestionUI from '../../layouts/AddQuestionUI'
import useForm from './useForm'



const AddQuestion = ({ choiceList, handletQUestionListUpdate, setChoiceList }) => {
    return (
        <div>
            <AddQuestionUI setChoiceList={setChoiceList} choiceList={choiceList} handletQUestionListUpdate={handletQUestionListUpdate} form={useForm()} />
        </div>
    )
}

export default AddQuestion;
