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

const ChoiceList = ({ choices }) => {


    return (


        <Table>
            <tr>
                <TableHead colSpan="2">Text</TableHead>
                <TableHead>isCorect</TableHead>
                <TableHead>Action</TableHead>
            </tr>
            {choices.map((choice, index) => (
                <List choice={choice} key={index} />
            ))}


        </Table>
    )
}

export default ChoiceList;
