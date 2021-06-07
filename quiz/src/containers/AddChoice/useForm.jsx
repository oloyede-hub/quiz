import { useState } from 'react'

const useForm = () => {


    const [choices, setChoices] = useState({})


    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'text' ? target.value : target.checked

        setChoices({
            [e.target.name]: value,
            ...choices,
        });
    };

    const onChangeValue = (e) => {
        setChoices({
            ...choices,
            [e.target.name]: e.target.checked,
        });
    };




    return {
        onChange,
        choices,
        setChoices,
        onChangeValue
    };
}

export default useForm;
