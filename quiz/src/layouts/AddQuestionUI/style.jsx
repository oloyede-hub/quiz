import styled from "styled-components"
const Wrapper = styled.div`
        margin: 15px auto; 
        padding: 10px;
        width: 613.324px;
        height: 540px;
        border: 1px solid #333;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

const Header = styled.h1`
        font-size: 17px;
        font-weight: 700px;
        line-height: 12px;
        margin: 5px;
        padding: 10px;
        text-align: center;
        letter-spacing: 1px;
        color:#000000;
    `;

const Input = styled.input`
        padding: 0px 5px;
        margin: 10px 20px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
        outline: none;
        width: 85%;
        height: 40px;
        border: 1px solid #DEE1E6;
        background: #F7F8F9;
    `;

const Form = styled.form`
        padding: 0px 10px;
        margin:0 auto;
        font-size: 12px;
        font-weight: normal;
        margin: 0 auto;
        width: 540px;
        
    `;

const InputWrapper = styled.form`
    padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column
    `;


const Division = styled.div`
        display: flex;
         justify-content: space-between;
         flex-direction: row;
    `;
const StyleConfig = () => {



    return {
        Wrapper,
        Header,
        InputWrapper,
        Form,
        Input,
        Division
    };
}

export default StyleConfig