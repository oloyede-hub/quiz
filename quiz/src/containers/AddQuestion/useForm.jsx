import { useState } from 'react'

const useForm = () => {

    const [question, setQuestion] = useState({
        text: "",
        type: "",
        points: "",
        choiceList: []
    });

    const onChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    }

    console.log("FormQuestion: ", question)

    return {
        onChange,
        question,
        setQuestion
    };
}

export default useForm;
