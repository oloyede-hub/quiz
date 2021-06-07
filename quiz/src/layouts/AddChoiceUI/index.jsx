import React from 'react';
import Button from '../../components/Button';
import styleConfig from "./style";
import { useHistory } from "react-router-dom"

const AddChoiceUI = ({ form: { choices, onChange, onChangeValue }, handleChoiceListUpdate }) => {

    const { InputWrapper, InputCheck, Wrapper, Input, Header, Form, } = styleConfig();
    const history = useHistory();
    console.log("Choice: ", choices)
    const handleSubmitChoice = () => {
        handleChoiceListUpdate(choices);
        history.push("/addquestion");
    };

    return (
        <Wrapper>
            <Header>Choice</Header>
            <section>
                <Form>
                    <InputWrapper style={{ width: "100%" }}>
                        <label htmlFor="text">Choice</label>
                        <Input
                            id="text"
                            name="text"
                            type="text"
                            placeholder="Your choice"
                            value={choices.text}
                            onChange={onChange}
                        />
                    </InputWrapper>
                    <InputCheck
                        name="correct_option"
                        id="correct_option"
                        type="checkbox"
                        checked={choices.correct_option}
                        onChange={onChangeValue}
                    />
                    <label htmlFor="correct_option">Correct Option</label>
                </Form>
            </section>
            <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                <div style={{ width: "100px" }} />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button
                        color="#333333"
                        path="/addquestion"
                        title="Cancel"
                        bgcolor="#B3B3B3"
                    />
                    <Button
                        path="/addquestion"
                        onClick={handleSubmitChoice}
                        title="Add Choice"
                        color="#fff"
                        bgcolor="#0057D8"
                    />
                </div>
            </section>
        </Wrapper>
    )
}
export default AddChoiceUI;
