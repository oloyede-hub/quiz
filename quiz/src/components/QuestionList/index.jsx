import React from 'react'
import styled from "styled-components";
import List from './List';



const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #333;
  width: 100%;
  
`;

const TableData = styled.th`
   text-align: center;
    color:#596780;
    font-size: 11px;
   padding: 8px 0px;
`;


const QuestionList = ({ questions }) => {


    return (


        <Table>
            <thead>
                <tr style={{ textAlign: "center" }}>
                    <TableData colSpan="2">Text</TableData>
                    <TableData></TableData>
                    <TableData>Type</TableData>
                    <TableData>Choices</TableData>
                    <TableData>Points</TableData>
                    <TableData colSpan="2">Action</TableData>
                    <TableData  ></TableData>

                </tr>
            </thead>
            {questions.map((question, index) => (
                <List question={question} choice={question.choiceList?.length} key={index} />
            ))}


        </Table>
    )
}

export default QuestionList;
