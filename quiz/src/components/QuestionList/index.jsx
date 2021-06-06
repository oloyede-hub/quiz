import React from 'react'
import styled from "styled-components";
import List from './List';



const Table = styled.table`
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;
const TableHead = styled.th`
    text-align: left;
    background-color: #DEE1E6;
    color: #333;
    border: 1px solid #ddd;
`;

const TableTD = styled.td`
  
`;

const QuestionList = ({ questions }) => {


    return (


        <Table>
            <tr>
                <TableHead>Text</TableHead>
                <TableHead >Type</TableHead>
                <TableHead >Choices</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Action</TableHead>
            </tr>
            {questions.map((question, index) => (
                <List question={question} choice={question.choiceList?.length} key={index} />
            ))}


        </Table>
    )
}

export default QuestionList;
