import React from 'react';
import AddQuestionUI from '../../layouts/AddQuestionUI'
import useForm from './useForm'



const AddQuestion = ({ handletQUestionListUpdate }) => {
    return (
        <div>
            <AddQuestionUI handletQUestionListUpdate={handletQUestionListUpdate} form={useForm()} />
        </div>
    )
}

export default AddQuestion;
