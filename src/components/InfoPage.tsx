import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import HeaderContext from './HeaderContext';

type InfoPageProp = {
    questionList: Array<any>
    currPage: String
}

const InfoPage = (props: InfoPageProp) => {
    const headerContext = useContext(HeaderContext);
    console.log("hello header")
    console.log(headerContext)


    const QuestionsMapper = props.questionList
    const [showAnswer, setShowAnswer] = useState({'name': '', 'open': false})
    console.log("this the curr page..." + props.currPage)
    function onClick(evt: any){
        if(headerContext.state.isMenuOpen){
            headerContext.setState({isMenuOpen: false})
        }
        if (showAnswer.open && showAnswer.name === evt.target.name){
            setShowAnswer({
                'name': evt.target.name,
                'open': false
            })
        }else{
            setShowAnswer({
                'name': evt.target.name,
                'open': true
            })
        }
    }

    console.log(showAnswer)

    return(
        <InfoPageContainer>
            <JavaScriptInfoTitle>{props.currPage}</JavaScriptInfoTitle>
            <JavaScriptInfoContainer>
                {
                    QuestionsMapper.map((k: any) => {
                        return(
                            <JavaScriptInfoQuestions key={k.index}>
                                <JavaScriptInfoQuestion onClick={onClick} name={k.question}>{k.question}</JavaScriptInfoQuestion>
                                {showAnswer.name === k.question && showAnswer.open? 
                                    <JavaScriptInfoAnswerWrapper>
                                        <JavaScriptInfoRefLinkULWrapper>
                                            {k.link.map((h: string) => {
                                                return(
                                                    <JavaScriptInfoRefLinkUL key={h}>
                                                        <JavaScriptInfoAnswerRefLink href={h}>{h}</JavaScriptInfoAnswerRefLink>
                                                    </JavaScriptInfoRefLinkUL>
                                                )}
                                            )}
                                        </JavaScriptInfoRefLinkULWrapper>
                                        {
                                            k.answer ? 
                                            <JavaScriptInfoAnswerTextWrapper>
                                                <JavaScriptInfoTextTitle>Short Description</JavaScriptInfoTextTitle>
                                                <ContainerBreaker />
                                                <JavaScriptInfoAnswer>{k.answer}</JavaScriptInfoAnswer> 
                                            </JavaScriptInfoAnswerTextWrapper> : ""
                                        }
                                        {k.code ? 
                                            <JavaScriptInfoCode>
                                                <JavaScriptInfoTextTitle>Sample Code</JavaScriptInfoTextTitle>
                                                <ContainerBreaker />
                                                <JavaScriptInfoPre>
                                                    {k.code}
                                                </JavaScriptInfoPre>
                                            </JavaScriptInfoCode> : ""}
                                        {k.table ? 
                                            <InfoTableWrapper>
                                                {
                                                    k.table.map((v: any) => {
                                                        console.log("this is the table.... ", v)
                                                        return(
                                                            <InfoTableContainer key={v.title}>
                                                                <InfoTableTitle>{v.title}</InfoTableTitle>
                                                                <InfoTableContentContainer>
                                                                    {
                                                                        v.content.map((value: string) => {
                                                                            return(
                                                                                <InfoTableLi key={value}>{value}</InfoTableLi>
                                                                            )
                                                                        })
                                                                    }
                                                                </InfoTableContentContainer>
                                                            </InfoTableContainer>
                                                        )
                                                    })
                                                }
                                            </InfoTableWrapper>
                                        : ""}
                                    </JavaScriptInfoAnswerWrapper>
                                : ""}
                            </JavaScriptInfoQuestions>
                        )
                    })
                }
            </JavaScriptInfoContainer>
        </InfoPageContainer>
    )
}

const InfoTableWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const InfoTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid black;
    text-align: center;
`;
const InfoTableTitle = styled.div`
    padding: 10px;
    border-bottom: 1px solid black;
`;
const InfoTableContentContainer = styled.ul`
    text-align: start;
`
const InfoTableLi = styled.li``

const InfoPageContainer = styled.div`
    background-color: #dfe6e9;
    /* padding-left: 15px; */
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
`
const JavaScriptInfoTitle = styled.h2`
    text-align: center;
`
const JavaScriptInfoCode = styled.code``
const JavaScriptInfoPre = styled.pre`
    white-space: pre-wrap;       /* Since CSS 2.1 */
`
const ContainerBreaker = styled.hr`
  border: 0;
  clear:both;
  display:block;
  width: 100%;               
  background-color: #ff7675;
  height: 1px;
`

const JavaScriptInfoContainer = styled.div`
    border-radius: 10px;
    border: 3px solid black;
`

const JavaScriptInfoQuestions = styled.div`
    display: flex;
    flex-direction: column;
`

const JavaScriptInfoQuestion = styled.button`
    cursor: pointer;
    background-color: #b2bec3;
    padding: 10px;
    color: #d63031;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);
`
const JavaScriptInfoAnswerWrapper = styled.div`
    background-color: #dfe6e9;
    padding: 10px;
`
const JavaScriptInfoRefLinkULWrapper = styled.div``
const JavaScriptInfoRefLinkUL = styled.ul``

const JavaScriptInfoAnswerRefLink = styled.a`
    word-break: break-all
`
const JavaScriptInfoAnswer = styled.span`
`
const JavaScriptInfoAnswerTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`
const JavaScriptInfoTextTitle = styled.span`
    padding: 5px 0 5px 0;
    font-weight: bold;
`


export default InfoPage