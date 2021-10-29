import React, { Component } from 'react'
import '@atlaskit/css-reset';
import styled from 'styled-components';

import tempLogo from '../assets/trello.png'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px;
    background-color: darkturquoise;
`;

const Controllers = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Control = styled.div`
    margin-right: .7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lavender;
    padding: 20px;
    border-radius: 4px;
`;

const LongControl = styled.div`
    margin-right: .7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    background-color: lavender;
    padding: 20px;
    border-radius: 4px;
`;

const ExtraLongControl = styled.div`
    margin-right: .7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    background-color: lavender;
    padding: 20px;
    border-radius: 4px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vh;
    padding: 8px;
    border-radius: 4px;
`;

const Profile = styled.div`
    margin-right: .7vh;
    display: flex;
    jusify-content: center;
    align-items: center;
    padding: 20px;
    background-color: lavender;
    border-radius: 100%;
`;

const Logo = styled.img`
    height: 3vh;
    opacity: .4;
`;

export default class NavBar extends Component {
    render() {
        return (
            <Container>
                <Controllers>
                    <Control></Control>
                    <LongControl></LongControl>
                    <ExtraLongControl></ExtraLongControl>
                </Controllers>
                <Controllers>
                    <LogoContainer>
                        <Logo src={tempLogo} />
                    </LogoContainer>
                </Controllers>
                <Controllers>
                    <Control></Control>
                    <Control></Control>
                    <Control></Control>
                    <Control></Control>
                    <Profile></Profile>
                </Controllers>
            </Container>
        )
    }
}
