import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styled from 'styled-components';



const Lists = styled.li`
  font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: space-between;
   width: 100%;
   list-style-type: none;
  
`;

const Page = styled.p`
    color:#596780;
    margin-left: 60px;
  font-size: 14px;
  text-align: left;

`;

const List = ({ question, choice }) => {
    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + "..?";
        } else {
            return str;
        }
    }


    return (
        <Lists>
            <Page style={{ marginLeft: 0 }} > {truncateString(question.text, 15) || "Nil"}</Page>
            <div style={{ display: 'flex' }}>
                <Page>{question.type || "Nil"}</Page>
                <Page>{question.choiceList.length || "Nil"}</Page>
                <Page>{question.points || "Nil"}</Page>
                <Page style={{ display: "flex" }}>
                    <FaTrashAlt style={{ fontSize: "16px" }} />
                    <FaEdit style={{ fontSize: "16px" }} />
                </Page>
            </div>

        </Lists>
    )
}
export default List
