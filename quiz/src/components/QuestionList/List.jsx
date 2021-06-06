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
        <tr>
            <td> {truncateString(question.text, 30)}</td>
            {<td>{question.singleChoice}</td> || <td>{question.multiChoice}</td>}
            <td>{question.points}</td>
            <td>{choice}</td>
            <td>Tools</td>
        </tr>
    )
}

export default List
