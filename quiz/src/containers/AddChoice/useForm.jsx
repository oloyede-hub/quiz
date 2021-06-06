import { useState } from 'react'

const useForm = () => {


    const [choices, setChoices] = useState({})


    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setChoices({
            ...choices,
            [target.name]: value
        });
    };




    return {
        onChange,
        choices,
        setChoices,
    };
}

export default useForm;
