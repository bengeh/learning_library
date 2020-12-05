import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import JavaScript from '../assets/javascript.svg'
import Html from '../assets/html5.svg'
import TypeScript from '../assets/typescript.svg'
import Css from '../assets/css.svg'
import ReactSvg from '../assets/react.svg'
import Go from '../assets/go.svg'
import Java from '../assets/java.svg'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openWhichMenu, setOpenWhichMenu] = useState("")
    const openTheMenu = (menu: string) => {
        if(!openMenu){
            setOpenMenu(!openMenu)
        }
        if(openWhichMenu !== menu){
            setOpenWhichMenu(menu)
        }else{
            setOpenMenu(!openMenu)
            setOpenWhichMenu(menu)
        }
    }
    const closeTheMenu = () => {
        setOpenMenu(false)
    }
    return(
        <HeaderContainer>
            <HeaderWrapperMain>
                <HeaderText>Learning Library</HeaderText>
                <HeaderNavigation>
                    <OpenMenuButton onClick={() => openTheMenu("frontend")}>Front End</OpenMenuButton>
                    <OpenMenuButton onClick={() => openTheMenu("backend")}>Back End</OpenMenuButton>
                </HeaderNavigation>
            </HeaderWrapperMain>
            <HeaderWrapper menuOpen={openMenu}>
                {   openWhichMenu === "frontend" ? 
                        <HeaderWrapperContainer>
                            <LinkWrapper><HeaderIcon src={JavaScript} /><Link onClick={closeTheMenu} to={"/frontend/javascript"} style={{ textDecoration: 'none', color: 'black' }}>JavaScript</Link></LinkWrapper>
                            <LinkWrapper><HeaderIcon src={Html} /><Link onClick={closeTheMenu} to={"/frontend/html"} style={{ textDecoration: 'none',color: 'black' }}>HTML</Link></LinkWrapper>
                            <LinkWrapper><HeaderIcon src={TypeScript} /><Link onClick={closeTheMenu} to={"/frontend/typescript"} style={{ textDecoration: 'none',color: 'black' }}>TypeScript</Link></LinkWrapper>
                            <LinkWrapper><HeaderIcon src={Css} /><Link onClick={closeTheMenu} to={"/frontend/css"} style={{ textDecoration: 'none',color: 'black' }}>CSS</Link></LinkWrapper>
                            <LinkWrapper><HeaderIcon src={ReactSvg} /><Link onClick={closeTheMenu} to={"/frontend/react"} style={{ textDecoration: 'none',color: 'black' }}>ReactJS</Link></LinkWrapper>
                        </HeaderWrapperContainer> :
                        <HeaderWrapperContainer>
                            <LinkWrapper><HeaderIcon src={Java} /><Link to={"/backend/java"} style={{ textDecoration: 'none', color: 'black' }}>Java</Link></LinkWrapper>
                            <LinkWrapper><HeaderIcon src={Go} /><Link to={"/backend/go"} style={{ textDecoration: 'none', color: 'black' }}>Go</Link></LinkWrapper>
                        </HeaderWrapperContainer>
                }
            </HeaderWrapper>
        </HeaderContainer>
    )
}
const OpenMenuButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 10px;
    cursor: pointer;
`;

const HeaderIcon = styled.img`
    width: 25%;
    height: 25%;
`

const HeaderWrapper = styled.div<{menuOpen: boolean}>`
    position: relative;
    width: 100%;
    z-index: 30000;
    background-color: white;
    display: ${(props) => props.menuOpen ? "block" : "none"}
`
const HeaderWrapperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    transition: height 0.32 ease-out;

`
const HeaderContainer = styled.div`
`

const HeaderWrapperMain = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ff7675;
`
const HeaderNavigation = styled.div`
    display: flex;
    flex-direction: row;
`
const HeaderText = styled.h2`
    margin-left: 15px;
    color: #dfe6e9;
`
const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    align-items: center;
    flex: 0 0 21%;
    width: calc(100% / 3);
    margin: 0 20px 0 20px;
`
export default Header;