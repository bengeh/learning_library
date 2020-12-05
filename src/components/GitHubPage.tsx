import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <GitHubPageWrapper>
            <GitHubPageTitleWrapper>
                <GitHubPageTitle>Git Hub Pages for Algo</GitHubPageTitle>
                <GitHubPageLink href={"https://github.com/bengeh/coding-for-fun"}>View algo repo on git hub</GitHubPageLink>
            </GitHubPageTitleWrapper>
            <GitHubPageContent>
                <GitHubPageUL>
                    <GitHubPageLI>Ben Geh</GitHubPageLI>
                    <GitHubPageLI>Aspiring Full Stack Engineer</GitHubPageLI>
                    <GitHubPageLI>GoLang, JS, Python, Java</GitHubPageLI>
                </GitHubPageUL>
            </GitHubPageContent>
        </GitHubPageWrapper>
    )
}
const GitHubPageWrapper = styled.div`
    width: 100%;
    height: 25%;
    background-color: #dfe6e9;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 19px 0 10px 10px;
`
const GitHubPageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GitHubPageTitle = styled.span``
const GitHubPageLink = styled.a``
const GitHubPageContent = styled.div``
const GitHubPageUL = styled.ul``
const GitHubPageLI = styled.li``

export default Header;