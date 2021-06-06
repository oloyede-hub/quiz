import React, { useEffect } from 'react';
import Button from '../../components/Button';
import StyleConfig from "./style";
import { useHistory } from "react-router-dom";
import ChoiceList from "../../components/ChoiceList"

const AddQuestion = ({ form: { form, onChange, setForm }, handletQUestionListUpdate, choiceList: choices }) => {
    const { Wrapper, Header, Division, InputWrapper, Input } = StyleConfig();
    const history = useHistory()
    const handleSubmitQuestion = () => {
        handletQUestionListUpdate(form);
        history.push("/")
    };



    return (
        <Wrapper>
            <Header> Question</Header>
            <section style={{ width: "540px", margin: "0 auto" }}>
                <InputWrapper style={{ margin: 0, width: "100%" }}>
                    <label for="time_allowed" style={{ margin: "5px 0px" }}>Question</label>
                    <textarea style={{ resize: "none", height: "40px" }} name="text" value={form.question} onChange={onChange} />
                </InputWrapper>
                <section>
                    <form>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div style={{ textAlign: "left", fontWeight: "200px", fontSize: "15px" }}>Type</div>
                                <div>
                                    <input
                                        type="radio"
                                        name="singleChoice"
                                        id="single"
                                        value="Single Choice"
                                        checked={form.singleChoice}
                                        onChange={onChange}
                                    />
                                    <label for="single">Single Choice</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="multipleChoice"
                                        id="multiple"
                                        value="Multiple Choice"
                                        checked={form.multipleChoice || false}
                                        onChange={onChange}
                                    />
                                    <label htmlFor="multiple">Multiple Choice</label>
                                </div>
                            </div>
                            <InputWrapper style={{ margin: 0, width: "44%" }}>
                                <label for="time_allowed" style={{ paddingLeft: "20px" }}>Points</label>
                                <Input
                                    id="points"
                                    name="points"
                                    type="text"
                                    placeholder="100"
                                    value={form.time_allowed}
                                    onChange={onChange}
                                />
                            </InputWrapper>
                        </div>
                    </form>
                </section>
            </section>

            <section style={{ width: "540px", margin: "0 auto", border: "1px solid  #333", height: "237px", }} >
                <Division style={{ width: "440px", margin: "0 auto", position: "relative", overflow: `${choices?.length && "auto"}` }}>
                    {choices?.length === 0 || choices === undefined ? (
                        <div style={{ width: "540px", height: "460px" }}>
                            <Button style={{ position: "absolute", top: "40%", left: "40%" }} path="/addchoice" title="Add Choice" color="#fff" bgcolor="#0057D8" />
                        </div>
                    ) : (
                        <ChoiceList choices={choices} />
                    )}
                </Division>
            </section>
            <Division style={{ alignItems: "center" }} >
                <Division style={{ width: "250px" }} />
                <Division style={{ padding: "5px", alignItems: "center", margin: "20px" }}>
                    <Button path="/" color="#333333" bgcolor="#B3B3B3" title="Cancel" />
                    <Button onClick={handleSubmitQuestion} title="Create" color="#fff" bgcolor="#0057D8" />
                </Division>
            </Division>
            {/* <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <div style={{ width: "250px" }} />
                <div style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button path="/" color="#333333" bgcolor="#B3B3B3" title="Cancel" />
                    <Button onClick={handleSubmitQuestion} title="Create" color="#fff" bgcolor="#0057D8" />
                </div>
            </section> */}

        </Wrapper>
    )
}

export default AddQuestion;
