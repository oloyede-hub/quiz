import React from 'react';
import Button from '../../components/Button';
import StyleConfig from "./style";
import { useHistory } from "react-router-dom"

const AddChoiceUI = ({ form: { choices, onChange }, handleListUpdate }) => {

    const { InputWrapper, InputCheck, Wrapper, Input, Header, Form, } = StyleConfig();
    const history = useHistory()

    const handleSubmitChoice = () => {
        handleListUpdate(choices);
        history.push("/addquestion");
    };

    return (
        <Wrapper>
            <Header>Choice</Header>
            <section>
                <Form>
                    <InputWrapper style={{ margin: 0, width: "100%" }}>
                        <label htmlFor="choice">Choice</label>
                        <Input
                            id="choice"
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
                        onChange={onChange}
                    />
                    <label for="correct_option">Correct Option</label>
                </Form>
            </section>
            <section style={{ display: "flex", padding: "20px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                <div style={{ width: "100px" }} />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button color="#333333" path="/addquestion" title="Cancel" bgcolor="#B3B3B3" />
                    <Button onClick={handleSubmitChoice} title="Add Choice" color="#fff" bgcolor="#0057D8" />
                </div>
            </section>
        </Wrapper>
    )
}

export default AddChoiceUI;
