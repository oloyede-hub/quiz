import React from 'react'
import styled from "styled-components";




const Td = styled.tbody`
 padding: 0px;

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
        <tr>
            <td colSpan="2">{truncateString(choice.text, 30)}</td>
            <td></td>
            <td>{choice.correct_option ? "true" : "false"}</td>
            <td>Tools</td>
        </tr>
    )
}

export default List;
