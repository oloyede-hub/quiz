import React from 'react'
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";





const Li = styled.tbody`
 display: flex;
 justify-content: space-between;
  width: 440px;
  padding-top: 5px;

`;

const List = ({ choice }) => {
    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <Li style={{}}>
            <p>{truncateString(choice.text, 30)}</p>
            <p style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                <p>{choice.correct_option ? "true" : "false"}</p>
                <p style={{ display: "flex" }}>
                    <FaTrashAlt style={{ fontSize: "16px" }} />
                    <FaEdit style={{ fontSize: "16px" }} />
                </p>
            </p>

        </Li>
    )
}

export default List;
