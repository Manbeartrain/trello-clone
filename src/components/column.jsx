import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    width: 18vw;
    background-color: whitesmoke;
    display: flex;
    max-height: 80vh;
    flex-direction: column; 
    padding: 4px;
`;

const Title = styled.h3`
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
`;
const TaskList = styled.div`
    padding: 8px;
    border-radius: 4px;
    transition: background-color .2s ease-in-out;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'whitesmoke')};
    flex-grow: 1;
    min-height: 100px;
`;

const Button = styled.button`
    display: flex;
    padding: 18px;
    font-size: 14px;
    color: gray;
    justify-align: flex-start;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;


export default class Column extends Component {
    
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
                <Button>+ Add another card</Button>
            </Container>
        )
    }
}