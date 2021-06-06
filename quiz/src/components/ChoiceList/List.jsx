import React from 'react'

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
            <td> {truncateString(choice.text, 30)}</td>
            <td>{choice.correct_option}</td>
            <td>Tools</td>
        </tr>
    )
}

export default List
