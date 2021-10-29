import React, { Component } from 'react'
import '@atlaskit/css-reset';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px 22px;
    background-color: darkslateblue;
`;

const Controllers = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Control = styled.div`
    margin: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    padding: 20px;
    border-radius: 4px;
`;

const Spacer = styled.div`
    height: 2vh;
    border-radius: 2px;
    width: 2px;
    background-color: lightgrey;
`;

const ContainerTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: white;
`;

export default class Header extends Component {
    render() {
        return (
            <Container>
                <ContainerTitle>Team Goal Setting Central</ContainerTitle>
                <Controllers>
                    <Control></Control>
                    <Spacer></Spacer>
                    <Control></Control>
                    <Spacer></Spacer>
                    <Control></Control>
                    <Control></Control>
                    <Spacer></Spacer>
                    <Control></Control>
                </Controllers>
            </Container>
        )
    }
}
