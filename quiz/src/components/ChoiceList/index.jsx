import React from 'react'
import styled from "styled-components";
import List from './List';



const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
  
`;

const TableHead = styled.th`
    text-align: left;
    background-color: #DEE1E6;
    color:#596780;
    font-size: 11px;
    border: 1px solid #ddd;
   padding: 8px;
`;


const ChoiceList = ({ choices }) => {


    return (
        <Table>
            <thead>
                <tr style={{ textAlign: "left" }}>
                    <TableHead colSpan="2" >Text</TableHead>
                    <TableHead  ></TableHead>
                    <TableHead>isCorect</TableHead>
                    <TableHead>Action</TableHead>

                </tr>
            </thead>
            <tbody>
                {choices.map((choice, index) => (
                    <List choice={choice} key={index} />
                ))}
            </tbody>
        </Table>
    )
}

export default ChoiceList;
