import React from 'react'

const List = ({ question, choice }) => {
    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <tr style={{ textAlign: "left" }}>
            <td colSpan="2"> {truncateString(question.text, 20)}</td>
            <td></td>
            <td>{question.type}</td>
            <td>{question.choiceList.length}</td>
            <td>{question.points}</td>
            <td>{choice.length}</td>
            <td colSpan="2">Tools</td>
            <td></td>
        </tr>
    )
}

export default List
