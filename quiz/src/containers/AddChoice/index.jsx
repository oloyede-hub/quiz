import React from 'react';
import AddChoiceUI from '../../layouts/AddChoiceUI';
import useForm from './useForm';


const AddChoice = ({ handleListUpdate }) => {
    return (
        <div>
            <AddChoiceUI handleListUpdate={handleListUpdate} form={useForm()} />
        </div>
    )
}

export default AddChoice;
