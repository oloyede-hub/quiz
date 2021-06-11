import React from 'react'
import styled from "styled-components";
import List from './List';



const Lists = styled.li`
  font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: space-between;
   width: 100%;
   list-style-type: none;
  
`;

const ListData = styled.div`
    color:#596780;
    font-size: 11px;
  
`;


const ChoiceList = ({ choices }) => {


    return (
        <ul style={{ margin: "0 0px" }}>
            <Lists>
                <ListData style={{ width: "50%" }}> Text</ListData>
                <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                    <ListData>isCorect</ListData>
                    <ListData>Action</ListData>
                </div>
            </Lists>
            {
                choices.map((choice, index) => (
                    <List choice={choice} key={index} />
                ))
            }
        </ul >
    )
}

export default ChoiceList;
