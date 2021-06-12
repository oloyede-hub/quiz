import React from 'react'
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";





const Li = styled.li`
 display: flex;
 justify-content: space-between;
  width: 440px;

`;

const Page = styled.p`
    color:#596780;
  font-size: 14px;
//    width: "50px"
 

`;


const List = ({ choice }) => {
    const choiceData = JSON.parse(choice)

    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <Li style={{}}>
            <Page style={{ marginLeft: 0 }}>{truncateString(choiceData.text, 30)}</Page>
            <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                <Page>{choiceData.correct_option ? "true" : "false"}</Page>
                <Page style={{ display: "flex" }}>
                    <FaTrashAlt style={{ fontSize: "16px" }} />
                    <FaEdit style={{ fontSize: "16px" }} />
                </Page>
            </div>

        </Li>
    )
}

export default List;
