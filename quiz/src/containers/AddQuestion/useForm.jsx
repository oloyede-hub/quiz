import { useState } from 'react'

const useForm = () => {

    const [form, setForm] = useState({});

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    console.log("FormQuestion: ", form)

    return {
        onChange,
        form,
        setForm
    };
}

export default useForm;
