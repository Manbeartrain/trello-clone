import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
    box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.1);
`;

const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    padding: 0;
`;

const PillContainer = styled.div`
    display: flex;
    width: 90%;
`;

const Pill = styled.div`
    display: flex;
    margin-right: 5px;
    justify-content: center;
    align-content: center;
    padding: 1px;
    border-radius: 4px;
    background-color: ${props => props.color};
    width: 30%;
`;

const PillText = styled.div`
    color: white;
    font-size: 12px;
    font-weight: 700;
`;

export default class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <PillContainer>
                            {this.props.task.pills.map((pill) => {
                                return (
                                    <Pill color={pill.pillColor}>
                                        <PillText>{pill.pillName}</PillText>
                                    </Pill>
                                )
                            })}
                        </PillContainer>
                        <Text>
                            {this.props.task.content}
                        </Text>
                        {console.log(provided.innerRef)}

                    </Container>

                )}
            </Draggable>
        )
    }
}
